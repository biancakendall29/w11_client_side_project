import NewCustomerForm from "../components/NewCustomerForm";
import '../style_sheets/CustomerContainer.css';

const CustomerContainer = ({postCustomer, filterCustomers}) => {

    return (
        <>
        <h2>Customer Container !</h2>
        <NewCustomerForm postCustomer={postCustomer} filterCustomers={filterCustomers}/>
        </>
    )

}

export default CustomerContainer;