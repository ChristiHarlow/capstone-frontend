import Favorites from "./Favorites";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    // Define the host URL
    const host = "https://christisfavoritethings.com";

    return (
        <div className="container">
            <Header />
            <Favorites host={host}/>
            <Footer />
        </div>
    );
};

export default Home;
