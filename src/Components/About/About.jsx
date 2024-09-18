import React from 'react';
import './About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Shopper</h1>
      <p>
        Welcome to Shopper, your ultimate destination for trendy and affordable clothing. 
        We believe that fashion should be accessible to everyone, which is why we offer a 
        wide variety of styles for all occasions. 
      </p>
      <p>
        Founded in 2023, Shopper was created by a team of fashion enthusiasts who wanted 
        to make shopping an enjoyable experience. We handpick each item to ensure quality 
        and style, catering to a diverse audience of fashion-forward individuals.
      </p>
      <p>
        Our mission is to empower you to express your unique style while providing 
        exceptional customer service. Whether you're looking for casual wear, office attire, 
        or something special for a night out, we’ve got you covered!
      </p>
      <p>
        Join us on this fashionable journey, and let’s make the world a more stylish place, 
        one outfit at a time. Thank you for choosing Shopper!
      </p>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: support@shopper.com</p>
        <p>Phone: +1 (800) 123-4567</p>
      </div>
    </div>
  );
};

export default About;
