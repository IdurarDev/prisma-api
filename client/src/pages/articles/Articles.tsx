import React from 'react';
import { Fragment, useState, useEffect } from 'react'
import { Article } from '@prisma/client';

import bannerArticle from '../../images/article-banner.jpg';
import '../../css/articles.css';


function Articles() {
    useEffect(() => {
        getArticlesApi();
    }, []);

    const getArticlesApi = (): void => {
        const ARTICLES_API: string = 'http://localhost:8000/api/articles/';

        fetch(ARTICLES_API)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLoading(false);
                setArticleApi(data);
            })
    };

    const [loading, setLoading] = useState(true);
    const [articleApi, setArticleApi] = useState<Article[]>([])
    return (
        <Fragment>
            <main>
                <section className='banner-container'>
                    <article className='text-over-banner'>
                        <h2>Articles sur les plantes</h2>
                        <p className='para-over-banner'>Bienfaits et vertus des plantes et santé, propriétés médicinales, utilisation en cuisine et thérapeutique pour soigner et prévenir les maladies</p>
                    </article>
                    <img className='bannerArticle' src={bannerArticle} alt="une belle bouteille au milieu de feuilles vertes" />
                </section>

                {loading === true ? (
                    <h2>Loading...</h2>
                ) : (
                    <section className='all-articles'>
                        {
                            articleApi.map((art, key) => {
                                return (
                                    <article className='one-article' key={key}>
                                        <h3>{art.title}</h3>
                                        <p>{art.description}</p>
                                    </article>
                                )
                            })
                        }
                    </section>
                )}
            </main>
        </Fragment>
    )
}

export default Articles