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
        <h3> List of Cars </h3>
        <hr />
        {carComponents}
        </>
    )
}

export default CarList;