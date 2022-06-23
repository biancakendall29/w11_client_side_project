import DealershipFilter from "../components/DealershipFilter";
import { useEffect, useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewDealerForm from "../components/NewDealerForm";
import '../style_sheets/DealerContainer.css';

const DealerContainer = ({cars, postCar, deleteCar, displayCars, stateCars, signedInDealer, filterDealers, postDealer}) => {

    // State for dealerships located here for "dealer admin" methods:
    // NEED TO ADD A DEFAULT VALUE
    const [dealerships, setDealerships] = useState([]);

    // const [dealers, setDealers] = useState([]);

    // const [signedInDealer, setSignedInDealer] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/dealerships")
            .then(response => response.json())
            .then(data => setDealerships(data))
    }, [])


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
            </ul>
            <NewDealerForm dealerships={dealerships}
                postDealer={postDealer}
                filterDealers={filterDealers}
                signedInDealer={signedInDealer} />      
            {getDealersCars}
        </>
    );
}

export default DealerContainer;