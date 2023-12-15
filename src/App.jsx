 import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/Footer';
import NavBar from './components/navbar';
import SignIn from './components/SignIn';
import Navdashboard from "./components/Navdashboard";
import AuthUser from "./AuthUser";
import { Route, Routes } from 'react-router-dom';
import UserHome from './components/Dashboard/userHome';

function App() {
  const {getToken}= AuthUser();
  if(!getToken()){
    return(
      <>
        <NavBar/> 
      </>
    )
  } 
  return(
      <>
        <Navdashboard/>    
      </>
    );
}

export default App
