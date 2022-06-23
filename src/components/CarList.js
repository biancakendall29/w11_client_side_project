import Car from "./Car"

const CarList = ({cars, addedCar}) => {
    const carComponents = cars.map(car => {
        return <Car
                    key={car.id}
                    car={car}
                    addedCar={addedCar} />

    })

    return (
        <>
        <div className="car-item-container">
        {carComponents}
        </div>
        </>
    )
}

export default CarList;