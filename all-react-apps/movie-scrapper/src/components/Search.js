import React, { useState } from 'react'

export default function Search(props) {

    const [searchValue, setSearchValue] = useState("");
    const handleOnChangeEvent = (e) => setSearchValue(e.target.value);
    const resetSearchValue = (e) => setSearchValue("");
    const callOnSearch = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetSearchValue();
    }
    return (
        <form className="search">
            <input type="text" onChange={handleOnChangeEvent} value={searchValue} />
            <input type="submit" value="Submit" onClick={callOnSearch} /> 
        </form>
    )
}
