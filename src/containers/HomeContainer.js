import CarGallery from "../components/CarGallery";
import CarFilters from "../components/CarFilters";
import CarList from "../components/CarList";

const HomeContainer = ({cars, signedInCustomer}) => {
    return (
        <>
        <h1>Hello from HomeContainer</h1>
        <h2>{`Hello ${signedInCustomer.name}`}</h2>
        <CarGallery />
        <CarFilters />
        <CarList cars={cars}/>
        </>
    );
}

export default HomeContainer;