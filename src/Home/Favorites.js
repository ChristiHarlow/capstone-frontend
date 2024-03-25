import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Masonry from "masonry-layout";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            let host = "http://localhost:3020";
            if (
                window.location.host.indexOf("christisfavoritethings.com") !==
                -1
            ) {
                
                host = "https://christisfavoritethings.com";
                console.log("Changing host to" , host);
            }

            try {
                const response = await fetch(`${host}/Favorites`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setFavorites(data.favorites);
                setTimeout(() => {
                    new Masonry(".grid", {
                        itemSelector: ".grid-item",
                    });
                }, 500);
                console.log(data);
            } catch (error) {}
        };

        getFavorites();
    }, []);

    return (
        <div className="grid">
            {favorites.map((favorite) => {
                return (
                    <div key={favorite.id} className="grid-item">
                        <div className="card">
                            <img
                                src={favorite.imageURL}
                                className="card-img-top"
                                alt={favorite.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {favorite.category} <br />
                                    {favorite.name}
                                </h5>
                                <p className="card-text">{favorite.summary}</p>
                                <h5>{favorite.price}</h5>
                                <a
                                    href={favorite.links}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <button className="btn btn-primary">
                                        Learn more
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Favorites;
