import {useState} from "react";


const NewDealerForm = ({postDealer, dealerships, filterDealers, signedInDealer}) => {

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

    const [stateDealerId, setStateDealerId] = useState(0);

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
        postDealer(stateDealer);
    }
    const selectNewCarDealership = (event) => {
        const dealershipId = parseInt(event.target.value);
        const selectedDealership = dealerships.find(dealership => dealership.id === dealershipId);
        let copiedDealer = {...stateDealer};
        copiedDealer.dealership = selectedDealership;
        setStateDealer(copiedDealer);
    }

        // sets signed in customer variable to the email input in sign in form
        const handleSignInChange = (event) => {
            let copiedStateDealerId = {...stateDealerId};
            copiedStateDealerId = event.target.value; 
            setStateDealerId(copiedStateDealerId);
        }
    
        // triggers function in App.js that filters through customer database, comparing emails
        // to the signed in customer variable.
        const handleFormSignInSubmit = (event) => {
            event.preventDefault();
            filterDealers(stateDealerId);
            console.log(signedInDealer.id);
        }
    
        // const changeSignUpMessage = () => {
        //     alert("You've signed up as " + stateDealer.name + " and your unique Id is: " + stateDealer.id)
        //     return true;
        // }
    
        // const changeSignInMessage = () => {
        //     alert("You've signed in as " + signedInDealer.name)
        //     return true;
        // }

    return (
        <>
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
            <button type="submit">SIGN UP</button>
        </form>
        <form onSubmit={handleFormSignInSubmit}>
        <h2>Sign in with your unique dealer ID</h2>
            <label>ID:</label>
            <input type="text" placeholder="ID" onChange={handleSignInChange} value={stateDealer.id}></input>
            <button type="submit">SIGN IN</button>
        </form>
        </>
    )

}

export default NewDealerForm;