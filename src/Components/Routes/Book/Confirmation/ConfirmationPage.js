import React from "react";
import { useNavigate } from "react-router-dom";
import { saveDB } from "../../../Database/Write";
import Navbar from "../../../NavBar/Navbar";
import "./confirmation.scss";

function ConfirmationPage(props) {
  const {
    selectedStaff,
    selectedTime,
    selectedDate,
    selectedService,
    contact,
    email,
    fname,
    lname,
    appointmentNotes,
    setContact,
    setEmail,
    setFname,
    setLname,
    setAppointmentNotes,
  } = props;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const navigate = useNavigate();

  async function handlePayment(event) {
    window.confirm("Are you sure?");
    alert("Appointment Booked!");
    await saveDB({
      selectedService: selectedService,
      selectedStaff: selectedStaff.name,
      selectedTime: selectedTime,
      selectedDate: selectedDate,
      contact: contact,
      email: email,
      firstName: fname,
      lastName: lname,
      notes: appointmentNotes,
    });
    setContact("");
    setEmail("");
    setFname("");
    setLname("");
    setAppointmentNotes("");
    navigate("/");
  }
  return (
    <>
      <Navbar />
      <div className="confirmation-container">
        <div className="apporved">
          <h2>Success!</h2>
          <h3>Please Confirm your Details Below</h3>
        </div>

        <div className="output-container">
          <h4>Service: {selectedService}</h4>
          <h4>Staff: {selectedStaff.name}</h4>
          <h4>
            Date: {selectedDate.getDate()} {months[selectedDate.getMonth()]}{" "}
            {selectedDate.getFullYear()}
          </h4>
          <h4>Contact: {contact}</h4>
          <h4>Email: {email}</h4>
          <h4>First Name: {fname}</h4>
          <h4>Last Name: {lname}</h4>
          <h4>Notes: {appointmentNotes}</h4>
        </div>

        <div className="payment-container">
          <button className="payment-button" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationPage;
