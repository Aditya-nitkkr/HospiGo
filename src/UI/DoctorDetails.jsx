import { useState } from "react";
import { AppointmentModal } from "./AppointmentModal";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const DoctorDetails = ({ doctor,hospital }) => {
    const [showModal, setShowModal] = useState(false);
    const navigator = useNavigate();
    const { isAuthenticated } = useAuth();

    const closeModal = () => setShowModal(false);

    const openModal = () => setShowModal(true);
    const redirectToLogin = () => {
        navigator("/signup")
    }


    return (
        <div className="doctor-section container">
            <div div className="doctor-image-container" >
                <img className="doctor-image" src={doctor.photo} alt="" />
            </div >
            <div className="doctor-details">
                <p className="doctor-name">{doctor.name}</p>
                <p className="doctor-specialization">Specialization : {doctor.specialization}</p>
                <p className="doctor-opd">OPD time : {doctor.opdTime}</p>
                <p className="doctor-mail"> Email : {doctor.email}</p>
                <p className="doctor-contact">Mobile Number : {doctor.phone}</p>
                <button className="appointment-btn" onClick={isAuthenticated ? openModal : redirectToLogin}>Book an Appointment</button>
                {
                    isAuthenticated && showModal && <AppointmentModal closeModal={closeModal} doctor={doctor} hospital={hospital} />
                }
            </div>
        </div >
    );
}