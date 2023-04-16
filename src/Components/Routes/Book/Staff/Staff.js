import "./Staff.scss";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../../NavBar/Navbar";
import "./Staff.scss";

function Staff(props) {
  const {
    selectedService,
    staffs,
    setStaffs,
    selectedStaff,
    setSelectedStaff,
  } = props;

  function handleOnChange(event) {
    const value = event.target.value;
    setSelectedStaff(staffs.find((staff) => staff.name === value));
  }

  const handleContinue = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <form>
      <Navbar />
      <div className="staff-container">
        <h2>Select a Staff Member</h2>
        <div className="staff-item-container">
          {staffs.map((staff) => (
            <div className="staff-item" key={staff.id}>
              <h3>{staff.name}</h3>
              <input
                type="radio"
                name="myRadioGroup"
                value={staff.name}
                onChange={handleOnChange}
                checked={selectedStaff === staff.name}
              />
            </div>
          ))}
        </div>
        <div className="staff-button-container">
          <button className="staff-button">
            {" "}
            <Link className="button-text" to="/Service">Back</Link>
          </button>
          {selectedStaff && (
            <button className="staff-button" onClick={(event) => handleContinue(event)}>
              <Link className="button-text" to="/Calender">Continue</Link>
            </button>
          )}
        </div>
      </div>
      </form>
    </>
  );
}

export default Staff;
