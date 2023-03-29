import { Fragment, useState, useEffect } from "react";
import { Plant } from "@prisma/client";
import bannerPlant from "../../images/plant-banner.jpg"
import "../../css/home.css";

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
            <main>
                <h1>Welcome to the home page</h1>
                <img className="bannerHome" src={bannerPlant} alt="une jolie bannière de plantes" />

                {loading === true ? (
                    <h2>Loading...</h2>
                ) : (
                    <section className="main-section">
                        {
                            apiData.map((plant, key) => {
                                return (
                                    <article key={key}>
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

export default Home