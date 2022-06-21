
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

    const [bodyType, setBodyType] = useState("");

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
        const selectedBodyType = event.target.value;
        setBodyType(selectedBodyType);
        let copiedCar = {...newCar};
        copiedCar.bodyType = bodyType;
        setNewCar(copiedCar);
    }

    useEffect(() => {
        console.log(bodyType);
    }, [bodyType])

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
    <form onSubmit={handleFormSubmit}>
        <h2>Add a new car</h2>
        <label>Brand:</label>
        <input 
            type="text" 
            placeholder="Brand" 
            name="brand"
            onChange={handleChange}
            value={newCar.brand}
        ></input>
        <label>BodyType:</label>
            <select value={bodyType} onChange={handleBodyType}>
                <option value={"SUV"}>SUV</option>
                <option value="COUPE">Coupe</option>
                <option value="SALOON">Saloon</option>
                <option value="CONVERTIBLE">Convertible</option>
                <option value="HATCHBACK">Hatchback</option>
                <option value="ESTATE">Estate</option>
            </select>
        <label>Colour:</label>
        <input 
            type="text" 
            placeholder="Colour" 
            name="colour"
            onChange={handleChange}
            value={newCar.colour}
        ></input>
        <label>Year:</label>
        <input 
            type="text" 
            placeholder="Year" 
            name="carYear"
            onChange={handleChange}
            value={newCar.carYear}
        ></input>
        <label>Price:</label>
        <input 
            type="text" 
            placeholder="Price" 
            name="price"
            onChange={handleChange}
            value={newCar.price}
        ></input>
        <label>Dealership:</label>
        <select onChange={selectNewCarDealership}>
                <option>Select a Dealership</option>
                {dealershipOptions}
        </select>
        <button type="submit">Add New Car</button>
    </form>
    )
}
export default NewCarForm;