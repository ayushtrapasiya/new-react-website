import React, { useContext } from 'react'
import './Checkout.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap'
import { Store } from '../Store/Mainstore'
 

export default function Checkout() {

  let  {data , total} =  useContext(Store)
  
  let cartdata = Array.isArray(data) ? data : Array.from(data)
  console.log(cartdata)
  

  function Placeorder(e){
     
  }
  return (
    <>
   
    <div className="container">
        <Form>
      <div className="row ">
        <div className="col-md-8 p-3">
          <h5 className='biling-heading fw-bold'>BILLING DETAIL</h5>
          <hr />
          <div class="row">
            <div class="col">
              <label htmlFor="firstname">First Name </label>
              <input type="text" class="form-control"   required/>
            </div>
            <div class="col">
              <label htmlFor="Lastname">Last Name </label>
              <input type="text" class="form-control" required/>
            </div>
          </div>
          <br />
          <label htmlFor="Lastname">Country *</label>
          <input type="text" class="form-control"  required />
          <br />
          <label htmlFor="Lastname">Address *</label>
          <input type="text" class="form-control"   required/>
          <br />
          <input type="text" class="form-control"  />
          <br />
          <label htmlFor="Lastname">Town/City *</label>
          <input type="text" class="form-control"  />
          <br />
          <label htmlFor="Lastname">Country/State *</label>
          <input type="text" class="form-control"  required/>
          <br />
          <label htmlFor="Lastname">Postcode/Zip *</label>
          <input type="text" class="form-control"  />
          <br />
          <div class="row">
            <div class="col">
              <label htmlFor="firstname">Phone </label>
              <input type="text" class="form-control"  required />
            </div>
            <div class="col">
              <label htmlFor="Lastname">Email</label>
              <input type="email" class="form-control"   />
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <div className="your-order-box p-3">
            <h5 className="fw-bold">YOUR ORDER</h5>
            <hr />
            <div className="product-tital">
              <div className="product">
                <h6 className="fw-bold">Product</h6>
                <ol >
                  {cartdata.map((v,i)=>{
                    return(
                      <li key={i}>{v.name}</li>
                    )
                  })}
                </ol>
              </div>
              <div className="tital">
                <h6 className="fw-bold">Tital</h6>
                {cartdata.map((v,i)=>{
                    return(
                <p className="fw-bold m-2">${v.price}</p>
                    )
                  })}
                 
              </div>
            </div>
            <hr />
            <div className="total-subtotal d-flex">
              <div className="main-total ">
                <h6 className='fw-bold'>total</h6>

                <h6 className="fw-bold">
                  subtotal
                </h6>
              </div>
              <div className="mani-subtotal">
                <h6 className='fw-bold'>${total}</h6>
                <h6 className="fw-bold">${total}</h6>
              </div>
            </div>
            <hr />
            <div className="payment-method">
              <div >
                <input type="checkbox" id='cheque-payment' />
                <label htmlFor="cheque-payment" name='cheque-payment' style={{ cursor: "pointer", marginLeft: "10px" }} >cheque payment</label>
              </div>
              <input type="checkbox" id='paypal-payment' />
              <label htmlFor="paypal-payment" name='paypal-payment' style={{ cursor: "pointer", marginLeft: "10px" }}>paypal</label>
            </div>
            <button className='place-order-button' onClick={Placeorder}>Place order</button>
          </div>
        </div>
      </div>
        </Form>
    </div>
    </>
  )
}
