import Navbar from "../../NavBar/Navbar";
import Hero from "../../Hero/Hero";
import "./About.scss";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../../Assets/aboutHero.jpg")}
      />
      <h1>About us</h1>
      <div className="content-container">
        <div className="text-container">
          <h2>Introduction</h2>
          <p>
            We make it easy for people to book appointments with services, and for services to find clients. Whether you are someone looking for appointments, or you are someone who can offer appointments, our platform is for you. 
            If you are looking for booking appointments, we help you find hand-picked experts from a variety of services. 
            We can connect you to other services as well, such as fitness training, nail salons, and more. 
          </p>
        </div>
        <div className="text-container">
          <h2>Service Providers</h2>
          <p>
            If you are someone who provides services, such as from the Personal Care Services industry, you can also place your services on our website to make it easy and convencient for potential clients to book appointments with you.
            Whether you are looking for services, or are someone providing these services, welcome to O'Slot!
          </p>
        </div>
        <div className="text-container">
          <h2>Scissor McScissorHands</h2>
          <p>
          Your currently selected service is hair styling. Our partner, Scissor McScissorHands, is a leading hair styling brand known throughout the country. The hair stylists have diverse and vast experience with a variety of different types of hair, and are recognized for their strong ability to please their clients. Whether your hair is straight, curly, or something else, you are in good hands!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
