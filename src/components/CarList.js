import Car from "./Car"

const CarList = ({cars}) => {
    const carComponents = cars.map(car => {
        return <Car
                    key={car.id}
                    car={car} />

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