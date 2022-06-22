import NewCustomerForm from "../components/NewCustomerForm";
import '../style_sheets/CustomerContainer.css';

const CustomerContainer = ({postCustomer, filterCustomers}) => {

    return (
        <div id="customer-container">
        <h2 id="customer-container-heading">Welcome Customer !</h2>
        <NewCustomerForm postCustomer={postCustomer} filterCustomers={filterCustomers}/>
        </div>
    )

}

export default CustomerContainer;