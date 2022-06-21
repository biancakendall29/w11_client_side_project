const DealerCar = ({car}) => {

    return (
        <div>
           <h4>{car.brand}</h4>
           <p>Body Type: {car.bodyType}</p>
            <p>Colour: {car.colour}</p>
            <p>Car Year: {car.carYear}</p>
            <p>Price: {car.price}</p>
            <p>Dealership: {car.dealership.name}, {car.dealership.location}</p>
            <button>Remove Car from Listings</button>

        </div>
    );
}

export default DealerCar;