import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import './App.css';
import {useState, useEffect} from "react";



function App() {

const [cars, setCars] = useState([]);

useEffect(() => {
  fetch("http://localhost:8081/cars")
    .then(response => response.json())
    .then(data => setCars(data))
}, [])

  return (
    <div className="App">
      <NavBar />
      <HomeContainer cars={cars}/>
    </div>
  );
}

export default App;
