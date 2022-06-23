import CarGallery from "../components/CarGallery";
import CarFilters from "../components/CarFilters";
import CarList from "../components/CarList";
import { CarImages } from "../components/CarImages";
import '../style_sheets/HomeContainer.css';

const HomeContainer = ({cars, signedInCustomer, getCarsByFilter, addedCar}) => {

    let userName = "";
    if (signedInCustomer[0]) { 
        userName = signedInCustomer[0].name;
    }
    else {
        userName = "";
    }
    
    

    return (
        <div id="home-container">
        <h2 id="welcome-heading">{`Welcome to Manual Traders ${userName} !`}</h2>
        <hr />
        <CarGallery slides={CarImages}/>
        <hr />
        <CarFilters cars={cars} getCarsByFilter={getCarsByFilter}/>
        <CarList cars={cars} addedCar={addedCar}/>
        
        </div>
    );
}

export default HomeContainer;