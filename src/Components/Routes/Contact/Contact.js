import Navbar from "../../NavBar/Navbar";
import Hero from "../../Hero/Hero";
import './Contact.scss';
import { FcCallback, FcBusinessContact } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

import ContactMap from "./Map";
import Footer from "../../Footer/Footer";


const Contact = () => {
    return (
        <>
          <Navbar />
          <Hero
            cName="hero-secondary"
            imageName={require("../../../Assets/contactHero.jpg")}
          />
          <h1>Contact</h1>
          <div className="content-container">
            <div className="text-container">
                <ul>
                    <li><FcCallback /><p>696-969-6969</p></li>
                    <li><FcBusinessContact /><p>example@example.com</p></li>
                    <li><GoLocation /><p>130 Dundas St, London, ON N6A 1G2</p></li>
                </ul>
            
            </div>
            <div className="map-container">
                <ContactMap />
            </div>
           
          </div>
          <Footer />
        </>
      );
}

export default Contact;
