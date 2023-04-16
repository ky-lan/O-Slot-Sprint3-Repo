import Footer from "../../Footer/Footer";
import Navbar from "../../NavBar/Navbar";
import Hero from "../../Hero/Hero";

const Cookies = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../../Assets/legal.jpg")}
      />
      <h1>Cookies</h1>
      <p>
        Cookies are small files saved on your phone, tablet or computer when you
        visit a website
      </p>
      <p>
        We use cookies to make this site work and collection information about
        how you use our service
      </p>
      <div className="content-container">
        <div className="text-container">
          <h2>Essential Cookies</h2>
          <p>
            Essential cookies keep your information secure while you use this
            service and we do not need to ask permission to use them
          </p>
        </div>
        <div className="text-container">
          <h2>Analytics Cookie (Optional)</h2>
          <p>
           With your permission, we use Google Analytics to collect data about how 
           you use this service. This information helps us to improve our service.
           Google is not allowed to use or share analytics data with anyone 
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cookies;
