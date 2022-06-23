import BasketCar from "../components/BasketCar";
import '../style_sheets/PurchaseContainer.css';

const PurchaseContainer = ({selectedCars, removeFromBasket, signedInCustomer, makePurchase}) => {

    const basketCarComponents = selectedCars.map(selectedCar => {
        return <BasketCar
                    key={selectedCar.id}
                    selectedCar={selectedCar}
                    removeFromBasket={removeFromBasket} />

    })

    let userName = "";
    if (signedInCustomer[0]) { 
        userName = "Here's your basket " + signedInCustomer[0].name;
    }
    else {
        userName = "Please sign up or sign in to make a purchase";
    }

    const handleMakePurchase = () => {
        if (signedInCustomer[0] && selectedCars[0]) {
            
            let newPurchase = 
            {
              date: new Date().toISOString().split('T')[0],
              customer: signedInCustomer[0],
              carPurchased: selectedCars[0]
            }

            makePurchase(newPurchase);

            alert("Hi " + newPurchase.customer.name + ", you've purchased a " + newPurchase.carPurchased.colour + " " + newPurchase.carPurchased.brand +
            " for " + newPurchase.carPurchased.price);
        }   

        else {
            alert("Your basket is empty or you're not signed in")
        }
    }
    
    return (
        <>
        <div id="purchase-basket">
        <h2>Basket</h2>
        <h3>{userName}</h3>
        {basketCarComponents}
        <button id="purchase-button" onClick={handleMakePurchase}>Make purchase</button>
        </div>
        </>
    );
}

export default PurchaseContainer;