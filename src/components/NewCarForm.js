
import {useEffect, useState} from "react";

const NewCarForm = ({dealerships, postCar}) => {
    const [newCar, setNewCar] = useState(
        {
            brand: "",
            bodyType: "",
            colour: "",
            carYear: "",
            price: 0,
            dealership: null
        }
    )

    const [newBodyType, setNewBodyType] = useState("");

    const dealershipOptions = dealerships.map((dealership) => {
        return (
            <option key={dealership.id} value={dealership.id}>{dealership.name}, {dealership.location}</option>
        );
    })

    const selectNewCarDealership = (event) => {
       const dealershipId = parseInt(event.target.value);
       const selectedDealership = dealerships.find(dealership => dealership.id === dealershipId);
       let copiedCar = {...newCar};
       copiedCar.dealership = selectedDealership;
       setNewCar(copiedCar);
    }
    

    const handleBodyType = (event) => {
        let selectedBodyType = event.target.value;
        setNewBodyType(selectedBodyType);
        let copiedCar = {...newCar};
        copiedCar.bodyType = selectedBodyType;
        setNewCar(copiedCar);
    }

    useEffect(() => {
        console.log(newBodyType);
    }, [newBodyType])

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedCar = {...newCar}
        copiedCar[propertyName] = event.target.value;
        setNewCar(copiedCar);
    }

    const handleFormSubmit = (event) => {
        console.log(newCar);
        event.preventDefault();
        postCar(newCar);
    }

    return (
    <form id="car-form" onSubmit={handleFormSubmit}>
        <h2>Add a new car</h2>
        <ul>
        <li>
        <label>Brand:</label>
        <input 
            type="text" 
            placeholder="Brand" 
            name="brand"
            onChange={handleChange}
            value={newCar.brand}
        ></input>
        </li>
        <li>
        <label>BodyType:</label>
            <select value={newBodyType} onChange={handleBodyType}>
                <option>Select a bodytype</option>
                <option value="SUV">SUV</option>
                <option value="COUPE">Coupe</option>
                <option value="SALOON">Saloon</option>
                <option value="CONVERTIBLE">Convertible</option>
                <option value="HATCHBACK">Hatchback</option>
                <option value="ESTATE">Estate</option>
            </select>
        </li>    
        <li>
        <label>Colour:</label>
        <input 
            type="text" 
            placeholder="Colour" 
            name="colour"
            onChange={handleChange}
            value={newCar.colour}
        ></input>
        </li>
        <li>
        <label>Year:</label>
        <input 
            type="text" 
            placeholder="Year" 
            name="carYear"
            onChange={handleChange}
            value={newCar.carYear}
        ></input>
        </li>
        <li>
        <label>Price:</label>
        <input 
            type="text" 
            placeholder="Price" 
            name="price"
            onChange={handleChange}
            value={newCar.price}
        ></input>
        </li>
        <li>
        <label>Dealership:</label>
        <select onChange={selectNewCarDealership}>
                <option>Select a Dealership</option>
                {dealershipOptions}
        </select>
        </li>
        <li>
        <button id="add-car-button" type="submit">Add New Car</button>
        </li>
        </ul>
    </form>
    )
}
export default NewCarForm;