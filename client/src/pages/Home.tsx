import React, { Fragment, useState, useEffect } from "react";

import "../css/home.css";

function Home() {
    const getAPI = () => {

        const API_LOCAL: string = 'http://localhost:8000/api/plants/';

        fetch(API_LOCAL)
            .then((res) => {
                console.log('result: ', res);
                return res.json();
            })
            .then((data) => {
                console.log('data:', data);
                setLoading(false);
                setApiData(data);
            });
    };
    useEffect(() => {
        getAPI();
    }, []);

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    { console.log('api data: ', apiData) }
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
                            // apiData.map((items, key) => {
                            //     return (
                            //         <section key={key}>
                            //             <article>
                            //                 <h2>{items}</h2>
                            //             </article>
                            //         </section>
                            //     )
                            // })
                        }
                    </section>
                )
                }
            </main>
        </Fragment >
    )
}

export default Home