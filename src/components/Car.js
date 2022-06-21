const Car = ({car, addedCar}) => {

    const handleAddToBasket = () => {
        addedCar(car)
    }
    return (
        <div>
            <h4>{car.brand}</h4>
            <p>Body Type: {car.bodyType}</p>
            <p>Colour: {car.colour}</p>
            <p>Car Year: {car.carYear}</p>
            <p>Price: {car.price}</p>
            <p>Dealership: {car.dealership.name} {car.dealership.location}</p>
            <button onClick={handleAddToBasket}>Add to Basket</button>

        </div>
    );
}

export default Car;