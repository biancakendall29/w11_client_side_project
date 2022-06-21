import DealershipFilter from "../components/DealershipFilter";
import { useEffect, useState } from "react";

const DealerContainer = ({cars}) => {

    // State for dealerships located here for "dealer admin" methods:
    // NEED TO ADD A DEFAULT VALUE
    const [dealerships, setDealerships] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/dealerships")
        .then(response => response.json())
        .then(data => setDealerships(data))
    }, [])


    return (
        <>
        <h1>Hello from DealerContainer</h1>
        <DealershipFilter dealerships={dealerships} cars={cars} />
        </>
    );
}

export default DealerContainer;