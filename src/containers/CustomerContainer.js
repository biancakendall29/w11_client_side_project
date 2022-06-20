import NewCustomerForm from "../components/NewCustomerForm";

const CustomerContainer = ({postCustomer}) => {

    return (
        <>
        <h2>Customer Container !</h2>
        <NewCustomerForm postCustomer={postCustomer, filterCustomers}/>
        </>
    )

}

export default CustomerContainer;