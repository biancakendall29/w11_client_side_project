
import {useState} from "react";

const NewCarForm = ({dealerships}) => {
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
    
    return(
    <form>
    <h2>Add a new car</h2>
    <label>Brand:</label>
    <input 
        type="text" 
        placeholder="Brand" 
        name="brand" 
    ></input>
    <label>BodyType:</label>
    {/* <select value={bodyType} onChange={handleBodyType}> */}
    <select value="" >
            <option value="SUV">SUV</option>
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
    ></input>
    <label>Year:</label>
    <input 
        type="text" 
        placeholder="Year" 
        name="carYear"
    ></input>
    <label>Price:</label>
    <input 
        type="text" 
        placeholder="Price" 
        name="price" 
    ></input>
    <label>Dealership:</label>
    <select onChange={selectNewCarDealership}>
            <option>Select a Dealership</option>
            {dealershipOptions}
        </select>
    </form>
    )
}
export default NewCarForm;