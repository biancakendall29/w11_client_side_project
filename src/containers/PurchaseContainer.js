const PurchaseContainer = ({selectedCar, removeFromBasket}) => {
    let basketCar = "";
    if (selectedCar) { 
        basketCar = selectedCar;
    }
    else {
        basketCar = 
        {
            bodyType: "",
            brand: "",
            colour: "",
            carYear: "",
            price: 0,
        };
    }
    
    const handleRemoveButton = () => {
        removeFromBasket()
    }
    return (
        <>
        <h2>Basket</h2>
            <h4>Brand: {basketCar.brand}</h4>
            <p>Body Type: {basketCar.bodyType}</p>
            <p>Colour: {basketCar.colour}</p>
            <p>Car Year: {basketCar.carYear}</p>
            <p>Price: {basketCar.price}</p>
            {/* {if (selectedCar)} */}
            <p>Dealership: {basketCar.dealership.name} {basketCar.dealership.location}</p>
            <button onClick={handleRemoveButton}>Remove</button>

        
        </>
    );
}

export default PurchaseContainer;