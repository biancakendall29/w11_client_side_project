import DealershipFilter from "../components/DealershipFilter";
import { useEffect, useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewDealerForm from "../components/NewDealerForm";
import '../style_sheets/DealerContainer.css';

const DealerContainer = ({cars, postCar, deleteCar, displayCars, stateCars}) => {

    // State for dealerships located here for "dealer admin" methods:
    // NEED TO ADD A DEFAULT VALUE
    const [dealerships, setDealerships] = useState([]);

    const [dealers, setDealers] = useState([]);

    const [signedInDealer, setSignedInDealer] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/dealerships")
            .then(response => response.json())
            .then(data => setDealerships(data))
    }, [])

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

  const filterDealers = (dealerId) => {
    console.log(dealerId);
    setSignedInDealer(dealers.find(dealer => dealer.id == dealerId));
    console.log(signedInDealer.name);
  }

  const signOutDealer = () => {
    setSignedInDealer(null);
    console.log(signedInDealer);
  }

    let getDealersCars = <h3>Please sign in as a dealer to get accessibility to adding/removing cars</h3>

    if (!signedInDealer) {
        getDealersCars =
            <h3 id="please-sign-in">Please sign in as a dealer to get accessibility to adding/removing cars</h3>
    }
    else {
        getDealersCars =
            <>
            <h3 id="welcome-dealer-name">{`Welcome ${signedInDealer.name}`}</h3>
            <NewCarForm dealerships={dealerships} 
                postCar={postCar}/>
            <DealershipFilter dealerships={dealerships} cars={cars} 
                              deleteCar={deleteCar} 
                              displayCars={displayCars} 
                              stateCars={stateCars}/>
            </>
    }

    return (
        <>
            <ul id="dealer-welcome">
                <li><h2 id="dealer-container-heading">Welcome Dealer !</h2></li>
                <li><button id="sign-out-dealer-button" onClick={signOutDealer}>Sign out</button></li> 
            </ul>
            <NewDealerForm dealerships={dealerships}
                postDealer={postDealer}
                filterDealers={filterDealers}
                signedInDealer={signedInDealer} />      
            {/* <NewCarForm dealerships={dealerships} 
                postCar={postCar}/>
            <DealershipFilter dealerships={dealerships} cars={cars} deleteCar={deleteCar} displayCars={displayCars} stateCars={stateCars}/> */}
            {getDealersCars}
        </>
    );
}

export default DealerContainer;