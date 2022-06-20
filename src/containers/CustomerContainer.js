import NewCustomerForm from "../components/NewCustomerForm";

const CustomerContainer = ({postCustomer, filterCustomers}) => {

    return (
        <>
        <h2>Customer Container !</h2>
        <NewCustomerForm postCustomer={postCustomer} filterCustomers={filterCustomers}/>
        </>
    )

}

export default CustomerContainer;