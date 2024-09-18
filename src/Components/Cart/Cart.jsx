import React, { useContext } from 'react'
import { Store } from '../Store/Mainstore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import { Link } from 'react-router-dom';
export default function Cart() {

  let { data, deletecartitem, total, productquntity, setproductquntity, increment, decrement } = useContext(Store)
  const cartdata = Array.isArray(data) ? data : Array.from(data);
  console.log(cartdata)


  return (
    <>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">product</th>
            <th scope="col">catagary</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartdata.map((v, i) => {
            return (
              <tr>
                <th scope="row">{v.id}</th>
                <td><img src={v.image} alt="" height={"100px"} /></td>
                <td>{v.name}</td>
             
                <td>${v.price} </td>
                <td style={{ position: "relative" }} onClick={() => deletecartitem(v.id)}><button className='main-cart-btn'><FontAwesomeIcon icon={faClose} /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {cartdata.length === 0 && <h1 style={{ textAlign: "center" }}>There are no item in cart</h1>}

      {cartdata.length != 0 && <div className="cart-total">
        <h3>cart total</h3>
        <div className="cart-detail">
        <div className="main-cart-subtotal">
          <h4>subtotal</h4>
          <h4>total</h4>
        </div>
        <div className="main-cart-total">
          <h4 className='total-num'>${total}</h4>
          <h4 className='total-num'>${total}</h4>
        </div>
        </div>
        <Link to="/Checkout"><button className='proceed-to-checkout'>PROCEED TO CHECKOUT</button></Link>
      </div>}

    </>
  )
}
