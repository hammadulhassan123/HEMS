import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/navbar'
import Home from './components/Home';

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
