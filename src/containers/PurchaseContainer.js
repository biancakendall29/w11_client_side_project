import BasketCar from "../components/BasketCar";

const PurchaseContainer = ({selectedCars, removeFromBasket, signedInCustomer, makePurchase}) => {

    const basketCarComponents = selectedCars.map(selectedCar => {
        return <BasketCar
                    key={selectedCar.id}
                    selectedCar={selectedCar}
                    removeFromBasket={removeFromBasket} />

    })

    let userName = "";
    if (signedInCustomer[0]) { 
        userName = "Welcome " + signedInCustomer[0].name;
    }
    else {
        userName = "Please sign up or sign in to make a purchase";
    }

    const handleMakePurchase = () => {
        if (signedInCustomer[0] && selectedCars[0]) {
            makePurchase(signedInCustomer[0], selectedCars[0]);
        }
        else {
            alert("Your basket is empty or you're not signed in")
        }
    }
    
    return (
        <>
        <h2>Basket</h2>
        <h3>{userName}</h3>
        {basketCarComponents}
        <button onClick={handleMakePurchase}>Make purchase</button>
        </>
    );
}

export default PurchaseContainer;