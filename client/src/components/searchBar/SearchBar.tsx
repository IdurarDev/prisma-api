import React, { useState } from 'react'
import ShowData from './showData';

import { IoMdSearch } from "react-icons/io";

import '../../css/searchBar.css';

const SearchBar = () => {
    const [buttonSearch, setButtonSearch] = useState(false);
    const [convertTextMin, setConvertTextMin] = useState('');

    let inputHandler = (e: any) => {
        var lowerCase = e.target.value.toLowerCase();
        setConvertTextMin(lowerCase);
    }

    return (
        <>
            <div
                onClick={() => setButtonSearch(!buttonSearch)}
            >
                <div className='icon-search'><IoMdSearch /></div>
            </div>
            {buttonSearch && (
                <div className="searching-bar">
                    <input
                        className='input-search-bar'
                        placeholder='Search an Plant, Article, Blog...'
                        onChange={inputHandler}
                    />
                    <ShowData data={convertTextMin} />
                </div>
            )}
        </>
    )
}

export default SearchBar