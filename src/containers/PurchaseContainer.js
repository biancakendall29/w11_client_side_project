const PurchaseContainer = ({selectedCar, removeFromBasket}) => {
    let basketCar = "";
    if (selectedCar) { 
        basketCar = selectedCar;
    }
    else {
        basketCar = {
            bodyType: "",
            brand: "",
            colour: "",
            carYear: "",
            price: 0,
            dealership: {
                name: "",
                location:""
            }
            


        };
    }
    
    const handleRemoveButton = () => {
        removeFromBasket()
    }
    return (
        <>
        <h2>Basket</h2>
            <h4>Brand: {selectedCar.brand}</h4>
            <p>Body Type: {selectedCar.bodyType}</p>
            <p>Colour: {selectedCar.colour}</p>
            <p>Car Year: {selectedCar.carYear}</p>
            <p>Price: {selectedCar.price}</p>
            <p>Dealership: {selectedCar.dealership.name} {selectedCar.dealership.location}</p>
            <button onClick={handleRemoveButton}>Remove</button>

        
        </>
    );
}

export default PurchaseContainer;