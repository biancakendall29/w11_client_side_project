import DealershipFilter from "../components/DealershipFilter";
import { useEffect, useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewDealerForm from "../components/NewDealerForm";

const DealerContainer = ({cars, postCar}) => {

    // State for dealerships located here for "dealer admin" methods:
    // NEED TO ADD A DEFAULT VALUE
    const [dealerships, setDealerships] = useState([]);

    const [dealers, setDealers] = useState([]);

    const [signedInDealer, setSignedInDealer] = useState([]);

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

//   useEffect(() => {
//     alert("You've signed up and your unique ID is: " + dealers[dealers.length -1]);
//   }, [dealers])

  const filterDealers = (dealerId) => {
    console.log(dealerId);
    console.log(dealers[0].id);
    setSignedInDealer(dealers.find(dealer => dealer.id == dealerId));
  }

  useEffect(() => {
    console.log(signedInDealer);
    alert("You've signed in as " + signedInDealer.name);
  }, [signedInDealer])

    return (
        <>

            <NewDealerForm dealerships={dealerships}
                postDealer={postDealer}
                filterDealers={filterDealers}
                signedInDealer={signedInDealer} />   
            <NewCarForm dealerships={dealerships} 
                postCar={postCar}/>
            <DealershipFilter dealerships={dealerships} cars={cars} />

        </>
    );
}

export default DealerContainer;