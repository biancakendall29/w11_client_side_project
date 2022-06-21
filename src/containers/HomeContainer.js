import CarGallery from "../components/CarGallery";
import CarFilters from "../components/CarFilters";
import CarList from "../components/CarList";

const HomeContainer = ({cars, signedInCustomer}) => {

    let userName = "";
    if (signedInCustomer[0]) { 
        userName = signedInCustomer[0].name;
    }
    else {
        userName = "User";
    }
    
    

    return (
        <>
        <h1>Hello from HomeContainer</h1>
        <h2>{`Hello ${userName}`}</h2>
        <CarGallery />
        <CarFilters />
        <CarList cars={cars}/>
        </>
    );
}

export default HomeContainer;