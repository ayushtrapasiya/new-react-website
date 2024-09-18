import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { faBars, faTimes, faUser, faShoppingBag, faClose } from '@fortawesome/free-solid-svg-icons';
import Shop from '../Shop/Shop'; 
import './Header.css';
import { Link } from 'react-router-dom';
import { Store } from '../Store/Mainstore';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showShop, setShowShop] = useState(false);

  let { data  } = useContext(Store)
  const cartdata = Array.isArray(data) ? data : Array.from(data);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleShop = () => {
    setShowShop(!showShop);
  };

  function closebar(){
    setIsOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className='mx-3'>Shopper</h1>
        </div>
        <div className="navbar-center">
          <Link to="/">Home</Link>
          <Link to="/About"> About</Link>
          <Link to="/Contect">Contect</Link>
          <Link to="/Maincart">My cart</Link>
        </div>
        <div className="navbar-right">
          <Link to="/Login">
          <button className='navbar-right-btn'><FontAwesomeIcon icon={faUser} /></button>
          </Link>
          <button className='navbar-right-btn'><FontAwesomeIcon icon={faShoppingBag} onClick={toggleShop} /><p className='total-length'>{cartdata.length}</p></button>
          
        </div>
        
        <div className="hamburger" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className='close-sedebar' onClick={closebar}><FontAwesomeIcon icon={faClose} color='white'/></button>
         <Link to="/">Home</Link>
         <Link to="/About"> About</Link>
          <Link to="/Contect">Contect</Link>
          <Link to="/Maincart">My cart</Link>
        <div className="sidebar-icons">
        <Link to="/Login">
          <button className='mini-navbar-right-btn'><FontAwesomeIcon icon={faUser} /></button>
          </Link>
          
          <button className='mini-navbar-right-btn' style={{position:"relative"}}><FontAwesomeIcon icon={faShoppingBag} onClick={toggleShop} /><p className='mini-total-length'>{cartdata.length}</p></button>
        
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {showShop && <Shop isOpen={showShop} onClose={toggleShop} />}
      <Deals/>
    </>
  );
}


export function Deals() {
  return (
    <>
      <div className="holiday-container">
        <h5>⚡️ Happy Holiday Deals on Everything ⚡️</h5>
      </div>
    </>
  )
}
