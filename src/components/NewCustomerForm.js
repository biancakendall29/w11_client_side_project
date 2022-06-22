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
    const [stateCustomerEmail, setStateCustomerEmail] = useState("");

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
        let copiedStateCustomerEmail = {...stateCustomer};
        copiedStateCustomerEmail = event.target.value; //only saves email address
        setStateCustomerEmail(copiedStateCustomerEmail);
    }

    // triggers function in App.js that filters through customer database, comparing emails
    // to the signed in customer variable.
    const handleFormSignInSubmit = (event) => {
        event.preventDefault();
        filterCustomers(stateCustomerEmail);
    }

    // const changeSignUpMessage = () => {
    //     alert("You've signed up as " + stateCustomer.name)
    //     return true;
    // }

    // const changeSignInMessage = () => {
    //     alert("You've signed in as " + stateCustomerEmail)
    //     return true;
    // }

    return (
        <>
        {/* sign up form to create new customer  */}
        <form id="customer-sign-up-form" onSubmit={handleFormSignUpSubmit}>
            <h2 id="customer-sign-up-heading">Sign up as a customer !</h2>
            <ul>
                <li> <label>Customer name:</label>
                     <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateCustomer.name}></input>
                </li>    
                <li> 
                     <label>Email address:</label>
                     <input type="text" placeholder="Email" name="emailAddress" onChange={handleChange} value={stateCustomer.emailAddress}></input>
                </li>     
                <li> <button type="submit">SIGN UP</button> </li> 
            </ul>
        </form>
        {/* sign in form to saved customers details to temp variable to keep track of signed in customer */}
        <form id="customer-sign-in-form" onSubmit={handleFormSignInSubmit}>
            <h2>Sign in with your email address</h2>
            <label>Email address:</label>
            <input type="text" placeholder="Email" onChange={handleSignInChange} value={stateCustomerEmail}></input>
            <button type="submit">SIGN IN</button>
        </form>
        </>

    );

}

export default NewCustomerForm;