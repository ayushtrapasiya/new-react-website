import React, { useContext, useState } from 'react'
import './Openbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faClose, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../Store/Mainstore'

export default function Openbox({ storedetail, Closepopup, openclose }) {

     let {sendcart} =  useContext(Store) 

    
    return (
        <>
            <div className={openclose ? 'main-open-box ' : 'close'}>
                <div className="row">
                    <div className="col-md-6 left-seaction">
                        <div >
                            <img src={storedetail.image} alt="" srcset="" className="image img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4 right-seaction">
                        <div className="all-product-detail">
                            <h1 className='fw-bold mb-3'>{storedetail.name}</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sed, quis molestiae vel libero obcaecati quaerat ad molestias dolorum dolores?</p>
                            <p>reting ★★★★☆ </p>
                            <p>Type : {storedetail.type}</p>
                            <div className="button-group">
                                <button className='cart-button '  onClick={()=>sendcart(storedetail.image , storedetail.name ,storedetail.type ,storedetail.price)}><FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
                                <button className='Watch-list-button'><FontAwesomeIcon icon={faHeart} /> Add to Watchlist</button>
                            </div>
                            <button className='pop-up-close-btn' onClick={Closepopup}> <FontAwesomeIcon icon={faClose} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
