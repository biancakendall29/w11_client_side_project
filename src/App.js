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

const [customers, setCustomers] = useState([]);

useEffect(() => {
  fetch("http://localhost:8081/customers")
    .then(response => response.json())
    .then(data => setCustomers(data))
}, [])

const postCustomer = (newCustomer) => {
  fetch("http://localhost:8081/customers/new",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCustomer)
      }
  )
  .then(response => response.json())
  .then(data => setCustomers([...customers, data]))
}

const [signedInCustomer, setSignedInCustomer] = useState([]);

const filterCustomers = (signedInCustomerEmail) => {
  customers.filter(customer => {
    setSignedInCustomer (customer.emailAddress === signedInCustomerEmail)
  });
  console.log(signedInCustomer);
}

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
            <Route path="/" element={<HomeContainer cars={cars} signedInCustomer={signedInCustomer}/>} />
            <Route path="/customerContainer" element={<CustomerContainer postCustomer={postCustomer}
                   filterCustomers={filterCustomers} />} />

        </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
