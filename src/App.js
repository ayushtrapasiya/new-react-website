import './App.css';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
 
 
function App() {
  return (
   <>
   <Header/>
   <Outlet/>
   
   <Footer/> 
   </> 
  );
}
export default App;
