
//--------------------------Home Page---------------------------------
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel.jsx";
import { getNationalParks } from "../services/api.js";
import backgroundImage from "../assets/unsplash.jpg";

export default function Home() {

    const [parks, setParks] = useState([]);


    useEffect(() => {

        async function loadFeaturedParks() {

            try {

                const data = await getNationalParks("CA");

                setParks(data.slice(0, 9));

            } catch (error) {

                console.error(
                    "Unable to load featured parks",
                    error
                );

            }

        }


        loadFeaturedParks();

    }, []);



    return (

        <main className="home-page">


            <section className="hero" style={{backgroundImage: `url(${backgroundImage})`}}>

                <h1>
                    Welcome to Wander USA
                </h1>


                <p>
                    Discover America's most beautiful national parks,
                    save your favorites, and plan your next adventure.
                </p>


            </section>



            <section>

                <h2>
                    Featured National Parks
                </h2>


                <Carousel parks={parks} />

            </section>



        </main>

    );

}

