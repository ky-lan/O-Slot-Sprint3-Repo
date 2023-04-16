import Navbar from "../../../NavBar/Navbar";
import { Outlet, Link } from "react-router-dom";
import "./Service.styles.scss";

const Service = (props) => {
  const {
    services,
    setServices,
    showDescription,
    setShowDescription,
    selectedService,
    setSelectedService,
  } = props;

  const handleDescription = (event, serv) => {
    event.preventDefault();
    setShowDescription(serv.name);
  };

  function handleSelectedService(event) {
    event.preventDefault();
    const value = event.target.value;
    setSelectedService(value);
  }

  const handleContinue = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="service-container">
        <form>
          <h2>Select A Service</h2>
          <div className="service-item-container">
            {services.map((item) => (
              <div key={item.id} className="service-item">
                <div className="service-details-container">
                  <div className="service-details-title">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="service-details-1">
                    <p>${item.price}</p>
                    <span className="more-info" onClick={(event) => handleDescription(event, item)}>More Info</span>
                   
                  </div>
                   <div className="service-item-description">
                    {showDescription && <p>{item.description}</p>}
                    </div>
                </div>

                <div className="service-item-radio">
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value={item.name}
                    onChange={handleSelectedService}
                    checked={selectedService === item.name}
                  />
                </div>
              </div>
            ))}
          </div>
          {selectedService && (
            <div className="service-item-button-container">
              <button className="service-item-button" onClick={(event) => handleContinue(event)}>
                <Link className="button-text" to="/Staff">Continue</Link>
              </button>
            </div>
            )}
        </form>
        <Outlet />
      </div>
    </>
  );
};

export default Service;
