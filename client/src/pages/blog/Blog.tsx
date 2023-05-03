import { Fragment, useState, useEffect } from 'react'
import { Blog } from '@prisma/client';

import bannerArticle from '../../images/article-banner.jpg';
import '../../css/articles.css';

function Blogs() {
    useEffect(() => {
        getBlogApi();
    }, []);

    const getBlogApi = (): void => {
        const BLOG_API: string = 'http://localhost:8000/api/blog/';

        fetch(BLOG_API)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLoading(false);
                setBlogApi(data)
            })
    };

    const [loading, setLoading] = useState(true);
    const [blogApi, setBlogApi] = useState<Blog[]>([])

    return (
        <Fragment>
            <main>
                <section className="banner-container">
                    <article className="text-over-banner">
                        <h2>Blog sur les plantes</h2>
                        <p className="para-over-banner">Mon super blog sur les plantes</p>
                    </article>
                    <img className="bannerArticle" src={bannerArticle} alt="une belle bouteille au milieu de feuilles vertes" />
                </section>

                {loading === true ? (
                    <h2>Loading...</h2>
                ) : (
                    <section className="all-articles">
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
                )}
            </main>
        </Fragment>
    )
}

export default Blogs