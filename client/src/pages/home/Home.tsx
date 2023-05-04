import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Plant } from "@prisma/client";
import { Blog } from '@prisma/client';
import { Article } from '@prisma/client';

import { fetchApi } from "../../components/fetchApi";

import bannerPlant from "../../images/plant-banner.jpg"
import "../../css/home.css";

function Home() {
    const [apiData, setApiData] = useState<Plant[]>([]);
    const [articleApi, setArticleApi] = useState<Article[]>([])
    const [blogApi, setBlogApi] = useState<Blog[]>([])

    useEffect(() => {
        fetchApi('http://localhost:8000/api/plants/', setApiData)
        fetchApi('http://localhost:8000/api/articles/', setArticleApi)
        fetchApi('http://localhost:8000/api/blog/', setBlogApi)
    }, []);

    return (
        <Fragment>
            <main>
                <img className="bannerHome" src={bannerPlant} alt="une jolie bannière de plantes" />
                <h2 className="home-title-h2">Plantes & Santé</h2>
                <section className="main-section">
                    {
                        apiData.map((plant, key) => {
                            return (
                                <article className="one-article" key={key}>
                                    <h3>{plant.title}</h3>
                                    <p>{plant.description}</p>
                                </article>
                            )
                        })
                    }
                </section>
                <h2 className="home-title-h2">Article sur les bienfaits des plantes</h2>
                <section className="main-section">
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
                <h2 className="home-title-h2">Un aperçu du Blog</h2>
                <section className="main-section">
                    {
                        blogApi.map((blog, key) => {
                            return (
                                <article className="one-article" key={key}>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                </article>
                            )
                        })
                    }
                </section>
            </main>
        </Fragment >
    )
}

export default Home