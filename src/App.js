import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {

const [cars, setCars] = useState([]);

useEffect(() => {
  fetch("http://localhost:8081/cars")
    .then(response => response.json())
    .then(data => setCars(data))
}, [])

  return (
    <>
    <div className="nav">
    <Router>
        <ul>
            <li><Link to='/'>Home</Link></li>  
            <li><Link to='/customerContainer'>Customer Sign up/Log in</Link></li>
            <li><Link to='/dealerContainer'>Dealer Sign up/Log in</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>

        <Routes>
            <Route path="/" element={<HomeContainer cars={cars}/>} />
            <Route path="/customerContainer" element={<CustomerContainer />} />

        </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
