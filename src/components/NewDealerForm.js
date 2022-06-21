

const NewDealerForm = () => {

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
        postDealer(stateDealer);
    }
    return (

        <form>
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