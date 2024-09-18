import { faHeadphones, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { redirect, Form as RouterForm } from "react-router-dom";
import React from 'react'
import './Contect.css'
export default function Contect() {
  return (

    <>
      <div className="main-contect-container">
        <div className="row p-5">
          <div className="col-md-6">
            <div className="contect-heading">
              <h3 className='fw-bold'>CONTECT INFO</h3>
              <h5 className='fw-bold mt-3'><FontAwesomeIcon icon={faLocation} color='red' /> Address</h5>
              <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
              <h5 className='fw-bold'><FontAwesomeIcon icon={faPhone} color='red' /> Phone</h5>
              <p>125-711-811125-668-886</p>
              <h5 className='fw-bold'><FontAwesomeIcon icon={faHeadphones} color='red' />  Support</h5>
              <p>Support.photography@gmail.com</p>
            </div>
            <RouterForm method='POST'>
              <div className="send-massage mt-5">
                <h3 className='fw-bold'>SEND MASSAGE</h3>
                <input type="text" placeholder='name' name='name' />
                <input type="email" placeholder='Email' name='email' />
                <input type="text" placeholder='Wbsite' name='website' />
                <textarea name="massage" id="" placeholder='massage' ></textarea>
                <button className='send-massage-btn mb-3 m-auto'>Send Massage</button>
              </div>
            </RouterForm>
          </div>
          <div className="col-md-6">
            <div style={{ width: '100%', height: 'auto' }} >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.523856601054!2d72.54023393093125!3d23.028142464649992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e5f61715b9%3A0x5cfafda924078e8e!2sGulbai%20Tekra%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726504575812!5m2!1sen!2sin"
                width="100%"
                height="750"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
               className='map'></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export async function handlecontect({ request }) {
  console.log(request)
  let data = await request.formData()
  let maindata = Object.fromEntries(data)
  console.log(maindata)
  return redirect("/")

}