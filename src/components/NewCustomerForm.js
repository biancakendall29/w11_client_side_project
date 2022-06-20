import {useState} from "react";

const NewCustomerForm = ({postCustomer, filterCustomers}) => {

    // set initial state for a new customer
    const [stateCustomer, setStateCustomer] = useState(
        {
            name: "",
            emailAddress: ""
        }
    )

    // define signed in customer variable to null. This will be a customer email address
    let signedInCustomer = "";

    // saves new customer data to state
    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedStateCustomer = {...stateCustomer};
        copiedStateCustomer[propertyName] = event.target.value;
        setStateCustomer(copiedStateCustomer);
    }

    // triggers function to post new customer to customer database. postCustomer defined in App.js.
    const handleFormSignUpSubmit = (event) => {
        event.preventDefault();
        postCustomer(stateCustomer);
    }

    // sets signed in customer variable to the email input in sign in form
    const handleSignInChange = (event) => {
        signedInCustomer = event.target.value; //only saves email address
    }

    // triggers function in App.js that filters through customer database, comparing emails
    // to the signed in customer variable.
    const handleFormSignInSubmit = (event) => {
        event.preventDefault();
        filterCustomers(signedInCustomer);
    }

    return (
        <>
        {/* sign up form to create new customer  */}
        <form onSubmit={handleFormSignUpSubmit}>
            <h2>Sign up as a customer !</h2>
            <label>Customer name:</label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateCustomer.name}></input>
            <label>Email address:</label>
            <input type="text" placeholder="Email" name="emailAddress" onChange={handleChange} value={stateCustomer.emailAddress}></input>
            <button type="submit">SIGN UP</button>
        </form>
        {/* sign in form to saved customers details to temp variable to keep track of signed in customer */}
        <form onSubmit={handleFormSignInSubmit}>
            <h2>Sign in !</h2>
            <label>Email address:</label>
            <input type="text" placeholder="Email" onChange={handleSignInChange}></input>
            <button type="submit">SIGN IN</button>
        </form>
        </>

    );

}

export default NewCustomerForm;