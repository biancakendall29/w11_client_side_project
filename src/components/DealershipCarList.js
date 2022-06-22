import DealerCar from "./DealerCar"

const DealershipCarList = ({stateCars, deleteCar}) => {
    const carComponents = stateCars.map(car => {
        return <DealerCar
                    key={car.id}
                    car={car}
                    deleteCar={deleteCar}
                     />

    })

    return (
        <>
        <h3> List of Dealership's Cars </h3>
        <hr />
        {carComponents}
        </>
    )
}

export default DealershipCarList;