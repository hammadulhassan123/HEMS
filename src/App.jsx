import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/navbar'
import Home from './components/Home';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Page404 from './components/Page404';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
