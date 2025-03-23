import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../data.json";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

function Planet() {
    const [data, setData] = useState([]);
    let { postSlug } = useParams();

    // Array of images and corresponding links
    const images = [moon, mars, europa, titan];
    const destinations = ["TajMahal", "HawaMahal", "AmberFort", "WTP"];
    
    useEffect(() => {
        let planetItem = document.querySelector(`#${postSlug}`);
        planetItem?.classList.add("active");
        planetItem?.classList.remove("hover_effect");
        getData(postSlug);

        return () => {
            planetItem?.classList.remove("active");
            planetItem?.classList.add("hover_effect");
        };
    }, [postSlug]);

    const getData = (slug) => {
        const destinationData = db.destinations.find(dest => dest.name === slug);
        if (destinationData) {
            setData(destinationData);
        }
    };

    useEffect(() => {
        const linkItem = document.querySelector("#destination");
        const linkItem2 = document.querySelector("#destination2");
        
        linkItem?.classList.add("active");
        linkItem?.classList.remove("hover_effect");
        linkItem2?.classList.add("active");
        linkItem2?.classList.remove("hover_effect");

        return () => {
            linkItem?.classList.remove("active");
            linkItem?.classList.add("hover_effect");
            linkItem2?.classList.remove("active");
            linkItem2?.classList.add("hover_effect");
        };
    }, []);

    return (
        <main className="destination">
            <div className="content">
                <h3>
                    <span>01</span> Pick your destination
                </h3>
                <div className="grid">
                    <div className="one rotate">
                        {/* Render clickable images */}
                        {images.map((image, index) => (
                            <Link to={`/Tripsage/destination/src/${destinations[index]}`} key={index}>
                                <img
                                    src={image}
                                    alt={destinations[index]}
                                    style={data.name === destinations[index] ? {} : { display: "none" }}
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="two">
                        <ul className="planet-list">
                            {db.destinations.map((item, index) => (
                                <li
                                    className="planet-item hover_effect"
                                    key={index}
                                    id={`${item.name}`}
                                >
                                    <Link to={`/Tripsage/destination/${item.name}`}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="d-content">
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <hr />
                            <div className="distance-travel">
                                <div>
                                    <p className="data-label">AVG. DISTANCE</p>
                                    <p className="data">{data.distance}</p>
                                </div>
                                <div>
                                    <p className="data-label">EST. TRAVEL TIME</p>
                                    <p className="data">{data.travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Planet;
