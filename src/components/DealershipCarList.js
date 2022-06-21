import Car from "./Car"

const DealershipCarList = ({stateCars}) => {
    const carComponents = stateCars.map(car => {
        return <Car
                    key={car.id}
                    car={car}
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