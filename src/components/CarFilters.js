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
        <div id="car-filter-search-bar">
          <input id="car-filter-text-box" ref={inputValueRef} type="text" placeholder="Search All Cars"></input>
          <select value={filter} onChange={handleFilter}>
            <option value="">Select Filter</option>
            <option value="?brand=">Brand</option>
            <option value="?bodyType=">Bodytype</option>
            <option value="?colour=">Colour</option>
            <option value="?year=">Minimum Year</option>
            <option value="?price=">Maximum Price</option>
        </select>
        <button onClick={handleSearchCars}>Search</button>
        <button onClick={handleResetFilters}>Reset Filters</button>
        </div>
    );
}

export default CarFilters;