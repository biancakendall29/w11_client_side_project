import {useState} from "react";


const NewDealerForm = ({dealerships}) => {

    // set initial state for a new dealer

    const [stateDealer, setStateDealer] = useState(

        {
            name: "",
            dealership: null
        }

    )
    const dealershipOptions = dealerships.map((dealership) => {
        return (
            <option key={dealership.id} value={dealership.id}>{dealership.name}, {dealership.location}</option>
        );
    })

    // saves new customer data to state
    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedStateDealer = {...stateDealer};
        copiedStateDealer[propertyName] = event.target.value;
        setStateDealer(copiedStateDealer);
    }

    // triggers function to post new customer to customer database. postCustomer defined in App.js.
    const handleFormSignUpSubmit = (event) => {
        event.preventDefault();
        //postDealer(stateDealer);
    }
    const selectNewCarDealership = (event) => {
        const dealershipId = parseInt(event.target.value);
        const selectedDealership = dealerships.find(dealership => dealership.id === dealershipId);
        let copiedDealer = {...stateDealer};
        copiedDealer.dealership = selectedDealership;
        setStateDealer(copiedDealer);
    }
    return (

        <form onSubmit={handleFormSignUpSubmit}>
            <h2>Sign up as a Dealer</h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={stateDealer.name}>

            </input>

            <select onChange={selectNewCarDealership}>
                <option>Select a Dealership</option>
                {dealershipOptions}
            </select>

        </form>
    )

}

export default NewDealerForm;