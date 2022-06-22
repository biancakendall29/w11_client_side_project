const BasketCar = ({selectedCar, removeFromBasket}) => {

    const handleRemoveButton = () => {
        removeFromBasket();
    }

    return (
        <div id="basket-car">
           <h4>{selectedCar.brand}</h4>
           <p>Body Type: {selectedCar.bodyType}</p>
            <p>Colour: {selectedCar.colour}</p>
            <p>Car Year: {selectedCar.carYear}</p>
            <p>Price: {selectedCar.price}</p>
            <p>Dealership: {selectedCar.dealership.name} {selectedCar.dealership.location}</p>
            <button onClick={handleRemoveButton}>Remove Car from Basket</button>

        </div>
    );
}

export default BasketCar;