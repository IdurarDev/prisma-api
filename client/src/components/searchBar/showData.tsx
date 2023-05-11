import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Plant } from '@prisma/client';
import { Article } from '@prisma/client';
import { Blog } from '@prisma/client';

import { fetchApi } from '../fetchApi';

import '../../css/showData.css'

function ShowData(props: any) {
    const [plant, setPlant] = useState<Plant[]>([]);
    const [article, setArticle] = useState<Article[]>([]);
    const [blog, setBlog] = useState<Blog[]>([]);

    useEffect(() => {
        fetchApi('http://localhost:8000/api/plants/', setPlant);
        fetchApi('http://localhost:8000/api/articles/', setArticle);
        fetchApi('http://localhost:8000/api/blog/', setBlog);
    }, []);

    const filteredPlant = plant.filter((pl) => {
        if (props.data === '') {
            return;
        } else {
            return pl.title.toLowerCase().includes(props.data);
        }
    })
    const filteredArticle = article.filter((art) => {
        if (props.data === '') {
            return;
        } else {
            return art.title.toLowerCase().includes(props.data);
        }
    })
    const filteredBlog = blog.filter((bl) => {
        if (props.data === '') {
            return;
        } else {
            return bl.title.toLowerCase().includes(props.data);
        }
    })

    return (
        props.data ? <section className='result-search-data'>
            <div className="result-searching">
                Result fetch Data:
            </div>
            {filteredPlant.map((plant, key) => (
                <Link key={key} to={`http://localhost:3000/${plant.title}`}>
                    <article className='result-one-data' >
                        <h3>{plant.title}</h3>
                    </article>
                </Link>
            ))
            }
            {filteredArticle.map((art, key) => (
                <Link key={key} to={`http://localhost:3000/${art.title}`}>
                    <article className='result-one-data' >
                        <h3>{art.title}</h3>
                    </article>
                </Link>
            ))}
            {filteredBlog.map((bl, key) => (
                <Link key={key} to={`http://localhost:3000/${bl.title}`}>
                    <article className='result-one-data' >
                        <h3>{bl.title}</h3>
                    </article>
                </Link>
            ))}
        </section > : <div className='no-result-hidden'></div>
    )
}

export default ShowData