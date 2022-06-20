import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {

// loading cars from backend  

const [cars, setCars] = useState([]);

useEffect(() => {
  fetch("http://localhost:8081/cars")
    .then(response => response.json())
    .then(data => setCars(data))
}, [])

// loading customers from backend

const [customers, setCustomers] = useState([]);

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

const [signedInCustomer, setSignedInCustomer] = useState([]);

const filterCustomers = (signedInCustomerEmail) => {
  let filteredCustomer = {...signedInCustomer}
  // console.log(signedInCustomer);
  filteredCustomer = customers.filter(customer => customer.emailAddress === signedInCustomerEmail);
  setSignedInCustomer(filteredCustomer);
  console.log(filteredCustomer);
  console.log(signedInCustomer);
}

// search bar and filter drop down

const inputValueRef = useRef();

let filter = "";

// Used for testing purposes:
useEffect(() => {
  console.log(`cars: `, cars);
  console.log(inputValueRef.current.value.toUpperCase());
}, [cars]);


const getCarsByFilter = (filter, searchInput) => {
  fetch(`http://localhost:8081/cars${filter}${searchInput}`)
  .then(response => response.json())
  .then(data => setCars(data))
}

const handleSearchCars = () => {
  // bodyType is a case-sensitive enum, so toUpperCase() is needed here.
  const searchInput = inputValueRef.current.value.toUpperCase();
  getCarsByFilter(filter, searchInput);
}

const handleResetFilters = () => {
  filter = "";
  const searchInput = "";
  getCarsByFilter(filter, searchInput);
}

const handleFilter = (event) => {
  filter = event.target.value;
  console.log(filter);
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

        <div id="carFilter">
          <input ref={inputValueRef} type="text"></input><button onClick={handleSearchCars}>Search</button>
          <button onClick={handleResetFilters}>Reset Filters</button>
          <select value={filter} onChange={handleFilter}>
            <option value="">No Filter</option>
            <option value="?brand=">Brand</option>
            <option value="?bodyType=">Bodytype</option>
            <option value="?colour=">Colour</option>
            <option value="?year=">Minimum Year</option>
            <option value="?price=">Maximum Price</option>
        </select>
      </div>

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
