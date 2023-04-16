import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.styles.scss";

import { deleteField } from "firebase/firestore";
import { updateDB } from "../../../Database/Write";
import Navbar from "../../../NavBar/Navbar";

function Calender(props) {
  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedStaff,
    setSelectedStaff,
    staffs,
    setStaffs,
  } = props;
  let timeSlotIndex = null;

  //Minimum date to today
  const minDate = new Date();

  //Maximum date to next 7 days
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  async function handleTime(event) {
    const slot = JSON.parse(event.target.value);
    setSelectedTime(slot.time);
    timeSlotIndex = event.target.id;
    console.log(timeSlotIndex);
    const newTimeSlot = selectedStaff.timeSlot
      .slice(0, timeSlotIndex)
      .concat(selectedStaff.timeSlot.slice(timeSlotIndex + 1));
    await updateDB(selectedStaff.id, { timeSlot: newTimeSlot });
  }

  const handleContinue = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="date-time-container">
        <h2>Select Your Preferred Date and Time</h2>
        <div className="calender-container">
       
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>

        <div className="time-slot">
          
          {selectedStaff.timeSlot &&
            selectedStaff.timeSlot.map((timeS, index) => (
              <button
                className="time-slot-button"
                key={index}
                id={index}
                value={JSON.stringify(timeS)}
                onClick={handleTime}
              >
                {timeS.time}
              </button>
            ))}
          {selectedStaff.timeSlot.length == 0 && <div>No Slots Available</div>}
        </div>

        <div className="button-container">
          <button className="calender-button">
            {" "}
            <Link className="button-text" to="/staff">Back</Link>
          </button>
          {selectedStaff.timeSlot.length == 0 ? (
            <Link className="button-text" to="/staff">
              Back
            </Link>
          ) : (
            <button className="calender-button" onClick={(event) => handleContinue(event)}>
              <Link className="button-text" to="/Details">Continue</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Calender;
