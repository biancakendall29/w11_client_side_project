import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import DealerContainer from './containers/DealerContainer';
import './App.css';
import {useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import PurchaseContainer from './containers/PurchaseContainer';

function App() {

// loading cars from backend  

const [cars, setCars] = useState([]);

const [customers, setCustomers] = useState([]);

const [signedInCustomer, setSignedInCustomer] = useState([]);

const [selectedCars, setSelectedCars] = useState([]);

useEffect(() => {
  fetch("http://localhost:8081/cars")
    .then(response => response.json())
    .then(data => setCars(data))
}, [])

// loading customers from backend

useEffect(() => {
  fetch("http://localhost:8081/customers")
    .then(response => response.json())
    .then(data => setCustomers(data))
}, [])

// adding a new customer to database

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

const filterCustomers = (signedInCustomerEmail) => {
  let filteredCustomer = {...signedInCustomer}
  // console.log(signedInCustomer);
  filteredCustomer = customers.filter(customer => customer.emailAddress === signedInCustomerEmail);
  setSignedInCustomer(() => filteredCustomer);
  console.log(filteredCustomer);
}

// Changes cars state based on CarFilters.js.
const getCarsByFilter = (filter, searchInput) => {
  fetch(`http://localhost:8081/cars${filter}${searchInput}`)
  .then(response => response.json())
  .then(data => setCars(data))
}

const handleSignOut = () => {
  setSignedInCustomer([]);
}

// added car method 

const addedCar = (car) => {
  setSelectedCars([car]);
}

const removeFromBasket = () => {
  setSelectedCars([]);
}

const makePurchase = (purchasingCustomer, purchasedCar) => {
  console.log("Made a purchase");
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
            <li><Link to='/basket'>Basket</Link></li>
            <li><button onClick={handleSignOut}>Sign out</button></li>
            
        </ul>

        <Routes>
            <Route path="/" element={<HomeContainer cars={cars} signedInCustomer={signedInCustomer} 
            getCarsByFilter={getCarsByFilter} addedCar={addedCar}/>} />
            <Route path="/customerContainer" element={<CustomerContainer postCustomer={postCustomer}
                   filterCustomers={filterCustomers} />} /> 
            <Route path="/basket" element={<PurchaseContainer selectedCars={selectedCars} 
                   removeFromBasket={removeFromBasket} 
                   signedInCustomer={signedInCustomer}
                   makePurchase={makePurchase}/>} />
            <Route path="/dealerContainer" element={<DealerContainer cars={cars}/>} />

        </Routes>
    </Router>
    </div>

    </>
  );
}

export default App;
