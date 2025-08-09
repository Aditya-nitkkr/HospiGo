import { useState } from "react";
import hospitalList from "../../backend/hospital_data/rewari_hospitals_10.json"

export const UserAppointment = ({ patientAppointment }) => {
    const { firstName, middleName, lastName, mobile, email, address, age, gender, appointmentDate, dateOfBirth, selectSlot, hospitalId, status } = patientAppointment;

    // console.log(hospitalList);
    const [statusUpdated, setStatusUpdated] = useState(status || "Pending");
    const hosptialName = hospitalList.find(hospital => hospital.id === hospitalId);



    return (
        <li className="profile-list" key={patientAppointment._id}>
            <div className="patient-left-content">
                <p className={`patient-status ${statusUpdated.toLowerCase()}`}>{statusUpdated}</p>
                <div className="patient-left-content-div">
                    <figure className="profile-border">
                        <img src="/profile-default.png" className="profile-default-img" alt="profile-default-image" width="50%" />
                    </figure>
                    <h2 className="patient-name">{firstName} {middleName} {lastName}</h2>
                </div>
            </div>
            <div className="patient-right-content">
                <h3 className="patient-details">Appointment in {hosptialName.name}</h3>
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
                </div>
            </div>
        </li >
    )
}