import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const Home = () => {
    return(
        <>
        <Navbar />
        <Hero cName="hero"
        title="Start Your Journey"
        btnName="Book Now"
        btnClass="book"
        imageName = {require("../../Assets/HomeHero.jpg")}
        url = '/service'
         />
         <Footer />
        </>
    )
}

export default Home;
