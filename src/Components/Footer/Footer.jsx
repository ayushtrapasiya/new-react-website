 import React from 'react'
 import './Footer.css'
 export default function Footer() {
   return (
    <>
    <div className="main-footer-container mt-5">
      <div className="row  footer">
        <div className="col-md-3">
          <div className="company-name">
            <h1 className='fw-bold'>Shopper</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
               asperiores?</p>
          </div>
        </div>
        <div className="col-md-3">
        <div className="heading">
          <h3>Quick links</h3>
          <ul>
            <li>ABOUT</li>
            <li>BLOGS</li>
            <li>CONTECT</li>
            <li>FAQ</li>
          </ul>
        </div>
        </div>
        <div className="col-md-2">
        <div className="heading">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Orders Tracking</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>
        </div>
        </div>
        <div className="col-md-4">
        <div className="heading">
          <h3>NEWSLETTER</h3>
          <div className="email-input">
            <input type="text" className='email' placeholder='Email'/>
            <button className='email-btn'>SUBSUCRIBE</button>
            </div>
        </div>
        </div>
      </div>
      <hr />
      <p className='text-center'>Copyright © 2024 All rights reserved | This website  is made with  by Ayush patel</p>
      </div>
     
    </>
   )
 }
 