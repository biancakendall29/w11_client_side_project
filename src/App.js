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

const [purchases, setPurchases] = useState([]);

const [stateCars, setStateCars] = useState([]);

const [signedInDealer, setSignedInDealer] = useState([]);

const [dealers, setDealers] = useState([]);

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

// loading purchases from backend

useEffect(() => {
  fetch("http://localhost:8081/purchases")
  .then(response => response.json())
  .then(data => setPurchases(data))
}, [])

// loading dealers from backend

useEffect(() => {
  fetch("http://localhost:8081/dealers")
      .then(response => response.json())
      .then(data => setDealers(data))
}, [])

const postDealer = (newDealer) => {
  fetch("http://localhost:8081/dealers/new",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newDealer)    

  }
)
.then(response => response.json())
.then(data => setDealers([...dealers, data]))
}

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
  setSignedInDealer(null);
}


// added car method 

const addedCar = (car) => {
  setSelectedCars([car]);
}

const removeFromBasket = () => {
  setSelectedCars([]);
}

const makePurchase = (newPurchase) => {
  fetch("http://localhost:8081/purchases/new",
  {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newPurchase)
  }
)
.then(response => response.json())
.then(data => setPurchases([...purchases, data]))
}

const postCar = (newCar) => {
  // add the new car to db/server.
  fetch("http://localhost:8081/cars/new", 
  {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newCar)
  })
  // update things locally
  .then(response => response.json())
  .then(savedCar => setCars([...cars, savedCar]))
}

const displayCars = (checkedCars) => {
  setStateCars(checkedCars);
}

const deleteCar = (id) => {
  fetch("http://localhost:8081/cars/remove/" + id, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  })
  setCars(cars.filter(car => car.id !== id))
  setStateCars(stateCars.filter(car => car.id !== id))

}

const filterDealers = (dealerId) => {
  console.log(dealerId);
  setSignedInDealer(dealers.find(dealer => dealer.id == dealerId));
  console.log(signedInDealer.name);
}



  return (
    <div className="webpage">
    <Router>
        <div id="navBar">
        <ul id='navbarlink'>
            <li><Link to='/'>Home</Link></li>  
            <li><Link to='/customerContainer'>Customer</Link></li>
            <li><Link to='/dealerContainer'>Dealer</Link></li>
            <li><Link to='/basket'>Basket</Link></li>
            <li><button id="signOutButton" onClick={handleSignOut}>Sign out</button></li>
            
        </ul>
        </div>
        <div id="containersAll">
        <Routes>
            <Route path="/" element={<HomeContainer cars={cars} signedInCustomer={signedInCustomer} 
            getCarsByFilter={getCarsByFilter} addedCar={addedCar}/>} />
            <Route path="/customerContainer" element={<CustomerContainer postCustomer={postCustomer}
                   filterCustomers={filterCustomers} />} /> 
            <Route path="/basket" element={<PurchaseContainer selectedCars={selectedCars} 
                   removeFromBasket={removeFromBasket} 
                   signedInCustomer={signedInCustomer}
                   makePurchase={makePurchase}/>} />
            <Route path="/dealerContainer" element={<DealerContainer cars={cars} postCar={postCar} 
                    deleteCar={deleteCar} displayCars={displayCars} stateCars={stateCars}
                    signedInDealer={signedInDealer} filterDealers={filterDealers}
                    postDealer={postDealer}/>} />
        </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
