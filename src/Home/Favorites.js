import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            const response = await fetch(
                "https://christiharlow-capstone-backend.herokuapp.com/favorites"
            );
            const data = await response.json();
            setFavorites(data.favorites);
            console.log(data);
        };

        getFavorites();
    }, []);

    return (
        <div>
            <div className="row">
                {favorites.map((favorite) => {
                    return (
                        <div key={favorite.id} className="col-sm-6">
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
                                    <p className="card-text">
                                        {favorite.summary}
                                        <br />
                                        {favorite.price}
                                    </p>
                                    <a href={favorite.links} target="_blank">
                                        <button className="btn btn-primary">
                                            Buy now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;
