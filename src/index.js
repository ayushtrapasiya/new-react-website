import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from './Components/Store/Mainstore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import { handlevalue } from './Components/Login/Login';
import Contect, { handlecontect } from './Components/Contect/Contect';
import Checkout from './Components/Checkout/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routes = createBrowserRouter([
  { 
    path: "/", 
    element: <App/>,
    children : [{
      path  :"/",
      element :<Home/>
    } ,{
      path : "/About",
      element :<About/>
    } ,{
      path:"/Maincart",
      element : <Cart/>
    } ,
    {
      path :"/Login",
      element :<Login/>,
      action : handlevalue
    },
    {
      path : "/Contect",
      element : <Contect/>,
      action :  handlecontect
    },{
      path :"/Checkout",
      element : <Checkout/>
    }
    ]
  }
])

root.render(
  <React.StrictMode>
    <Data>
      <RouterProvider router={routes}></RouterProvider>
    </Data>
  </React.StrictMode>
);
 
reportWebVitals();
