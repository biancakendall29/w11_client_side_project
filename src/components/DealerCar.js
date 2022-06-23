const DealerCar = ({car, deleteCar}) => {

    const handleRemoveCar = () => {
        deleteCar(car.id);
    }

    return (
        <div className="car-items">
           <h4 className="car-brand-header">{car.brand}</h4>
           <p>Body Type: {car.bodyType}</p>
            <p>Colour: {car.colour}</p>
            <p>Car Year: {car.carYear}</p>
            <p>Price: {car.price}</p>
            <p>Dealership: {car.dealership.name}, {car.dealership.location}</p>
            <button className="add-to-basket" onClick={handleRemoveCar}>Remove Car from Listings</button>

        </div>
    );
}

export default DealerCar;