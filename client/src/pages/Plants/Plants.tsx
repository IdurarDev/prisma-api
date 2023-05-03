import { Fragment, useState, useEffect } from "react";
import { Plant } from "@prisma/client";

import bannerPlant from "../../images/plant-banner.jpg"
import "../../css/home.css";

function Plants() {
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
            <main>
                <img className="bannerHome" src={bannerPlant} alt="une jolie bannière de plantes" />

                {loading === true ? (
                    <h2>Loading...</h2>
                ) : (
                    <section className="main-section">
                        {
                            apiData.map((plant, key) => {
                                return (
                                    <article className="home-img" key={key}>
                                        <h3>{plant.title}</h3>
                                        <p>{plant.description}</p>
                                    </article>
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

export default Plants