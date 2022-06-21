import BasketCar from "../components/BasketCar";

const PurchaseContainer = ({selectedCars, removeFromBasket}) => {

    const basketCarComponents = selectedCars.map(selectedCar => {
        return <BasketCar
                    key={selectedCar.id}
                    selectedCar={selectedCar}
                    removeFromBasket={removeFromBasket} />

    })
    
    return (
        <>
        <h2>Basket</h2>
        {basketCarComponents}
        </>
    );
}

export default PurchaseContainer;