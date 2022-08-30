import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "masonry-layout";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            let host = "http://localhost:3001";
            if (window.location.host.indexOf(".herokuapp.com") !== -1) {
                host =
                    "https://christiharlow-capstone-backend.christisfavoritethings.com";
            }

            const response = await fetch(`${host}/favorites`);
            const data = await response.json();
            setFavorites(data.favorites);
            setTimeout(() => {
                const msnry = new Masonry(".grid", {
                    itemSelector: ".grid-item",
                });
            }, 500);
            console.log(data);
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
                                alt="Picture of Favorite Things"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {favorite.category} <br />
                                    {favorite.name}
                                </h5>
                                <p className="card-text">{favorite.summary}</p>
                                <h5>{favorite.price}</h5>
                                <a href={favorite.links} target="_blank">
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
