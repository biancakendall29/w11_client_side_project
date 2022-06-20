import {useState} from "react";

const NewCustomerForm = () => {

    const [stateCustomer, setStateCustomer] = useState(
        {
            name: "",
            emailAddress: ""
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedStateCustomer = {...stateCustomer};
        copiedStateCustomer[propertyName] = event.target.value;
        setStateCustomer(copiedStateCustomer);
    }

    

    return (
        <form onSubmit={handleFormSignUpSubmit}>
            <h2>Sign up as a customer !</h2>
            <label>Customer name:</label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateCustomer.name}></input>
            <label>Email address:</label>
            <input type="text" placeholder="Email" name="emailAddress" onChange={handleChange} value={stateCustomer.emailAddress}></input>
            <button type="submit">SIGN UP</button>
        </form>

    );

}

export default NewCustomerForm;