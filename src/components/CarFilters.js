import { useRef, useState } from "react";

const CarFilters = ({ getCarsByFilter}) => {

    let [filter, setFilter] = useState("");

    const inputValueRef = useRef();

    const handleSearchCars = () => {
        // bodyType is a case-sensitive enum, so toUpperCase() is needed here.
        const searchInput = inputValueRef.current.value.toUpperCase();
        getCarsByFilter(filter, searchInput);
    }
    
    const handleResetFilters = () => {
        setFilter(() => "");
        const searchInput = "";
        getCarsByFilter(filter, searchInput);
    }
    
    const handleFilter = (event) => {
        console.log(event);
        setFilter(() => event.target.value);
        console.log(filter);
    }

    return (
        <>
        <h2>Hello from CarFilters</h2>
        <div id="carFilter">
          <input ref={inputValueRef} type="text"></input><button onClick={handleSearchCars}>Search</button>
          <button onClick={handleResetFilters}>Reset Filters</button>
          <select value={filter} onChange={handleFilter}>
            <option value="">No Filter</option>
            <option value="?brand=">Brand</option>
            <option value="?bodyType=">Bodytype</option>
            <option value="?colour=">Colour</option>
            <option value="?year=">Minimum Year</option>
            <option value="?price=">Maximum Price</option>
        </select>
        </div>
        </>
    );
}

export default CarFilters;