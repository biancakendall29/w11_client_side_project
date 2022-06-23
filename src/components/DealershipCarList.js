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
        <div className="car-item-container">
            {carComponents}
        </div>
        </>
    )
}

export default DealershipCarList;