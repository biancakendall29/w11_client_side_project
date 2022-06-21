import DealershipFilter from "../components/DealershipFilter";
import { useEffect, useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewDealerForm from "../components/NewDealerForm";

const DealerContainer = ({ cars }) => {

    // State for dealerships located here for "dealer admin" methods:
    // NEED TO ADD A DEFAULT VALUE
    const [dealerships, setDealerships] = useState([]);

    const [dealers, setDealers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/dealerships")
            .then(response => response.json())
            .then(data => setDealerships(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:8081/dealers")
            .then(response => response.json())
            .then(data => setDealers(data))
    }, [])

    const postDealer = (newDealer) => {
        fetch("http://localhost:8081/dealers/new",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newDealer)    

        }
    )
    .then(response => response.json())
    .then(data => setDealers([...dealers, data]))
  }

    return (
        <>
            <NewDealerForm dealerships={dealerships}
                postDealer={postDealer} />
            <NewCarForm dealerships={dealerships} />
            <DealershipFilter dealerships={dealerships} cars={cars} />
        </>
    );
}

export default DealerContainer;