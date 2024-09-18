import React, { useContext } from 'react'
import './Women.css'
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

import { Store } from '../Store/Mainstore';
import Womendata from '../Alldata/Womendata';

export default function Women({Opendetail}) {

let { sendcart } = useContext(Store)

  return (
    <>
      <div className="all-card-containe">
        {Womendata.map((item, index) => (
          <div className="all-detail">
            <div key={''} className="card-container">
              <img src={item.image} alt="Product" className="product-image" />
              <div className="icon-container">
                <i onClick={() => sendcart(item.image, item.name, item.type, item.price)}><FaShoppingCart /></i>
                <i onClick={() => Opendetail(item.image, item.name, item.type, item.price)}  ><FaEye /></i>
                <i><FaHeart /></i>
              </div>
            </div><div className='sm-detail'>
              <span>{item.name}</span>
              <span>{item.type}</span>
              <span className="item-price"><h4>₹{item.price}</h4></span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
