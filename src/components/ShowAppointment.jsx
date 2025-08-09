import { useState } from "react";
import axios from "axios";

export const ShowAppointment = ({ patient }) => {
    const { firstName, middleName, lastName, mobile, email, address, age, gender, appointmentDate, dateOfBirth, selectSlot, doctorId, status } = patient;

    const [statusUpdated, setStatusUpdated] = useState(status || "Pending");
    const isDisabled = statusUpdated === "Accepted" || statusUpdated === "Rejected";



    const handleAcceptance = async () => {
        try {
            await axios.put(`http://localhost:8000/api/appointments/admin/update-status/${patient._id}`, {
                status: "Accepted"
            });
            setStatusUpdated("Accepted");
        } catch (error) {
            console.error("Failed to update status:", error);
        }
    };

    const handleRejection = async () => {
        try {
            await axios.put(`http://localhost:8000/api/appointments/admin/update-status/${patient._id}`, {
                status: "Rejected"
            });
            setStatusUpdated("Rejected");
        } catch (error) {
            console.error("Failed to update status:", error);
        }
    };

    const handleRevertBtn = async () => {
        try {
            await axios.put(`http://localhost:8000/api/appointments/admin/update-status/${patient._id}`, {
                status: "Pending"
            });
            setStatusUpdated("Pending");
        } catch (error) {
            console.error("Failed to revert status:", error);
        }
    };



    return (
        <li className="profile-list" key={patient._id}>
            <div className="patient-left-content">
                <p className={`patient-status ${statusUpdated.toLowerCase()}`}>{statusUpdated}</p>
                <div className="patient-left-content-div">
                    <figure className="profile-border">
                        <img src="/profile-default.png" className="profile-default-img" alt="profile-default-image" width="50%" />
                    </figure>
                    <h2 className="patient-name">{firstName} {middleName} {lastName}</h2>
                </div>
                {
                    isDisabled && (
                        <button type="button" className="revert-profile-btn" onClick={handleRevertBtn}> Revert</button>)
                }

            </div>
            <div className="patient-right-content">
                <h3 className="patient-details">Patient Details</h3>
                <div className="patient-info">
                    <p className="patient-info-item"><strong className="patient-info-label">Name:</strong> <span className="patient-info-value">{firstName}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Contact:</strong> <span className="patient-info-value">{mobile}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Email:</strong> <span className="patient-info-value">{email}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Address:</strong> <span className="patient-info-value">{address}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Age:</strong> <span className="patient-info-value">{age}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Gender:</strong> <span className="patient-info-value">{gender}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Appointment date:</strong> <span className="patient-info-value">{appointmentDate}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Date of Birth:</strong> <span className="patient-info-value">{dateOfBirth}</span></p>
                    <p className="patient-info-item"><strong className="patient-info-label">Slot Time:</strong> <span className="patient-info-value">{selectSlot}</span></p>

                    <div className="acceptance-btn">
                        <button type="button" className={`accept-profile-btn ${isDisabled ? "disable-btn" : ""}`} onClick={handleAcceptance} disabled={isDisabled}> Accept</button>
                        <button type="button" className={`accept-profile-btn ${isDisabled ? "disable-btn" : ""}`} onClick={handleRejection} disabled={isDisabled}> Reject</button>
                    </div>
                </div>
            </div>
        </li >
    )
}