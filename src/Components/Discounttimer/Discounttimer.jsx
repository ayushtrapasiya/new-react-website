import React, { useState, useEffect } from 'react';
import './Discounttimer.css'
const Discounttimer = ({ targetDate, imageUrl }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(targetDate);
    const difference = endDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='main-discount-contaier mt-5'>
    <div className='d-flex  mini'>
      <div className='col-md-5'>
        <img src= "/timergirl.jpg" alt="Countdown" className='img-fluid timer-image' width={"100%"}/>
      </div>

      <div  className='col-md-5 timer-container '>
      <div className="round">
        <p>Discount</p>
        <span style={{fontSize:"50px" ,marginBottom:"30px" , whiteSpace:"nowrap" , fontFamily:"cursive" ,  color:"#ca1515"}}>Summer 2019</span>
        <p>sale <span className='fw-bold' style={{color:"#ca1515"}}>50%</span></p>
      </div>
        {timeLeft.days !== undefined ? (
           <div className='all-time'>
            <div className='time'><h2 className='fw-bold'>{timeLeft.days}</h2> Days</div>
            <div className='time'><h2 className='fw-bold'>{timeLeft.hours}</h2> Hours</div>
            <div className='time'><h2 className='fw-bold'>{timeLeft.minutes}</h2> Minutes</div>
            <div className='time'><h2 className='fw-bold'>{timeLeft.seconds}</h2> second</div>
            </div>
        ) : (
          <div>Time's up!</div>
        )}
 
      </div>
    </div>
    </div>
  );
};

 
 
export default Discounttimer;
