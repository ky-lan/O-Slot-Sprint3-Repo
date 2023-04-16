import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About/About";
import Service from "./Components/Routes/Book/Service/Service";
import Staff from "./Components/Routes/Book/Staff/Staff";
import Calender from "./Components/Routes/Book/Calender/Calender";
import Details from "./Components/Routes/Book/Details/Details";
import ConfirmationPage from "./Components/Routes/Book/Confirmation/ConfirmationPage";
import Contact from "./Components/Routes/Contact/Contact";
import SignIn from "./Components/Sign-in/SignIn";
import Privacy from "./Components/Routes/Privacy/Privacy";
import Cookies from "./Components/Routes/Cookies/Cookies";
import Terms from "./Components/Routes/TermsAndConditions";
import { loadDB } from "./Components/Database/Read";

function App() {
  const [services, setServices] = useState([]);
  const [staffs, setStaffs] = useState([]);
  
  useEffect(() => {
    (async () => {
      //Load the database
      const dataFromDB = await loadDB();
      setServices(dataFromDB.services);
      setStaffs(dataFromDB.staffs)
      // setIsLoading(false);
    })(); //IIFE
  }, []);



  // Variables for service, staff , time slot: Story Point 14 can be done by displaying these vairables
  const [showDescription, setShowDescription] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  //  Variables for Form Details: Story Point 15 can be done by displaying these vairables
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <Service
              services={services}
              setServices={setServices}
              showDescription={showDescription}
              setShowDescription={setShowDescription}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          }
        />
        <Route
          path="staff"
          element={
            <Staff
              selectedService={selectedService}
              staffs={staffs}
              setStaffs={setStaffs}
              selectedStaff={selectedStaff}
              setSelectedStaff={setSelectedStaff}
            />
          }
        />

        <Route
          path="Calender"
          element={
            <Calender
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              selectedStaff={selectedStaff}
              setSelectedStaff={setSelectedStaff}
              staffs={staffs}
              setStaffs={setStaffs}
            />
          }
        />

        <Route
          path="Details"
          element={
            <Details
              contact={contact}
              setContact={setContact}
              email={email}
              setEmail={setEmail}
              fname={fname}
              setFname={setFname}
              lname={lname}
              setLname={setLname}
              appointmentNotes={appointmentNotes}
              setAppointmentNotes={setAppointmentNotes}
              selectedService={selectedService}
              selectedStaff={selectedStaff}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />
          }
        />

        <Route
          path="Confirmation Page"
          element={
            <ConfirmationPage
              selectedService={selectedService}
              selectedStaff={selectedStaff}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              contact={contact}
              email={email}
              fname={fname}
              lname={lname}
              appointmentNotes={appointmentNotes}
              setContact={setContact}
              setEmail={setEmail}
              setFname={setFname}
              setLname={setLname}
              setAppointmentNotes={setAppointmentNotes}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
//npm add formik