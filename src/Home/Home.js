import Favorites from "./Favorites";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    // Define the host URL for local deployment
    const host = "http://localhost:3020";

    return (
        <div className="container">
            <Header />
            <Favorites host={host}/>
            <Footer />
        </div>
    );
};

export default Home;
