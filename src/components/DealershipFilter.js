import { useEffect, useState } from "react";
import DealershipCarList from "./DealershipCarList";


const DealershipFilter = ({dealerships, cars}) => {

    const [stateCars, setStateCars] = useState([]);

    const dealershipOptions = dealerships.map((dealership) => {
        return (
            <option key={dealership.id} value={dealership.id}>{dealership.name}, {dealership.location}</option>
        );
    })

    useEffect(() => {
        console.log(cars);
    }, [cars])

    const handleChange = (event) => {
        const dealershipId = parseInt(event.target.value);
        let checkedCars = cars.filter(car => car.dealership.id === dealershipId);
        setStateCars(checkedCars);
    }

    useEffect(() => {
        return (
            console.log(stateCars)
        );
    }, [stateCars])


    return (
        <>
        <h1>Hello from DealershipFilter</h1>
        <select onChange={handleChange}>
            <option>Select a Dealership</option>
            {dealershipOptions}
        </select>
        <DealershipCarList stateCars={stateCars}/>
        </>
    );
}

export default DealershipFilter;