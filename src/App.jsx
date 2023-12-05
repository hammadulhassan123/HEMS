 import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/navbar'
import Footer from './components/Footer';
import Navdashboard from "./components/Navdashboard";
import AuthUser from "./AuthUser";

function App() {
  const {getToken}= AuthUser();
  if(!getToken()){
    return(
      <>
        <NavBar/>
        <Footer/>
      </>
    )
  } return(
      <>
        <Navdashboard/>
        <Footer/>
      </>
    );
}

export default App
