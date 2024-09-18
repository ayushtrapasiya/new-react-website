import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faClose, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Shop.css'; 
import { Store } from '../Store/Mainstore';
import { Link } from 'react-router-dom';
 
function Shop({ onClose, isOpen }) {
  const { data , total ,deletecartitem } = useContext(Store);
  
  const cartdata = Array.isArray(data) ? data : Array.from(data);  
        
  return (
    <div className={`shop ${isOpen ? 'open' : ''}`}>
      <div className="shop-header">
        <h2>Shop</h2>
        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={onClose} />
      </div>
      <hr />

      {cartdata.length === 0 && <h1 className='no-item'>There is no item in cart</h1>}
      <div className="main">
        {cartdata.map((item, index) => (
          <>
          <div className="cart-detail" key={index}>
            <div className="cart-image">
              <img src={item.image} alt=""  className='cart-img'/>
            </div>
            <div className="small-detail">
              <div className="item-name">{item.name}</div> 
              <div className="item-price">${item.price}</div> 
            </div>
            <button className='cart-btn'  onClick={()=>deletecartitem(item.id , item.price)}><FontAwesomeIcon icon={faClose} /><h4>remove</h4></button>
          </div>
            <hr />
          </>
        ))}
      </div>
      {cartdata.length !== 0 && <div className="btn-container">
               <div className="total">
                  <span><h4>Subtotal</h4></span>
                  <span><h4> {total}</h4></span>
               </div>
               <Link to="/Maincart"> <button className='cart-second-btn'>View Cart <FontAwesomeIcon icon={faCartPlus} /></button></Link>
               <button className='checkout cart-second-btn'>Continue To Checkout</button>
            </div>
            }
    </div>
  );
}

export default Shop;
