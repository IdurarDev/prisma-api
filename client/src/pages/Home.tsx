import React, { Fragment, useState, useEffect } from "react";
import { Plant } from "@prisma/client";

import "../css/home.css";

function Home() {
    useEffect(() => {
        getAPI();
    }, []);

    const getAPI = (): void => {
        const API_LOCAL: string = 'http://localhost:8000/api/plants/';

        fetch(API_LOCAL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLoading(false);
                setApiData(data);
            });
    };

    const [apiData, setApiData] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
            <header>
                <h1>Welcome to the home page</h1>
            </header>
            <main>

                {loading === true ? (
                    <h2>Loading...</h2>
                ) : (
                    <section>
                        {
                            apiData.map((plant, key) => {
                                return (
                                    <section key={key}>
                                        <article>
                                            <h2>{plant.title}</h2>
                                            <h3>{plant.description}</h3>
                                            <p>{ }</p>
                                        </article>
                                    </section>
                                )
                            })
                        }
                    </section>
                )
                }
            </main>
        </Fragment >
    )
}

export default Home