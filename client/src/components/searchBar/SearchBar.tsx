import React from 'react'
import { useState } from 'react'

import { Plant } from '@prisma/client';
import { Article } from '@prisma/client';
import { Blog } from '@prisma/client';


import { IoMdSearch } from "react-icons/io";

import '../../css/searchBar.css';

const SearchBar = () => {
    const [buttonSearch, setButtonSearch] = useState(false)

    const [plant, setPlant] = useState<Plant[]>([])
    const [article, setArticle] = useState<Article[]>([])
    const [blog, setBlog] = useState<Blog[]>([])


    return (
        <>
            <div
                onClick={() => setButtonSearch(!buttonSearch)}
                className='search'
            >
                <div className='icon-search'><IoMdSearch /></div>
            </div>
            {buttonSearch && (
                <div className="searching-bar">
                    <input className='input-search-bar' />
                </div>
            )}
        </>
    )
}

export default SearchBar