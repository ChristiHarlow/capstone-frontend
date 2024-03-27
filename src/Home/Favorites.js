import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const response = await fetch(`${host}/Favorites`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setFavorites(data.favorites);
                initializeMasonryLayout();
            } catch (error) {
                setError(error.message);
            }
        };   
        
        getFavorites(); / Call getFavorites inside useEffect
        
    }, [host]);

    const initializeMasonryLayout = () => {
        setTimeout(() => {
            new Masonry(".grid", {
                itemSelector: ".grid-item",
            });
        }, 500);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

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
