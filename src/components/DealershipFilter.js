import DealershipCarList from "./DealershipCarList";


const DealershipFilter = ({dealerships, cars, deleteCar, displayCars, stateCars}) => {

    

    const dealershipOptions = dealerships.map((dealership) => {
        return (
            <option key={dealership.id} value={dealership.id}>{dealership.name}, {dealership.location}</option>
        );
    })

    const handleChange = (event) => {
        const dealershipId = parseInt(event.target.value);
        let checkedCars = cars.filter(car => car.dealership.id === dealershipId);
        displayCars(checkedCars);
    }

    return (
        <>
        <h2>Please Select a Dealership:</h2>
        <select onChange={handleChange}>
            <option>Select a Dealership</option>
            {dealershipOptions}
        </select>
        <DealershipCarList stateCars={stateCars} deleteCar={deleteCar}/>
        </>
    );
}

export default DealershipFilter;