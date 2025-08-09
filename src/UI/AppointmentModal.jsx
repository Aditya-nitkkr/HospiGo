import { useEffect, useState } from "react";
import axios from "axios";
import "./AppointmentModal.css";
import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAuth } from "../context/AuthContext";


export const AppointmentModal = ({ closeModal, doctor, hospital }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const { userRegister } = useAuth();
    const [printData, setPrintData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        relation: "",
        mobile: "",
        mobile2: "",
        email: `${userRegister.email}`,
        address: "",
        age: "",
        gender: "",
        appointmentDate: "",
        dateOfBirth: "",
        selectSlot: "Not selected",
        reason: "",
        hospitalId: `${hospital.id}`,
        doctorId: `${doctor.id}`,
        hospitalEmail: `${hospital.email}`
    });



    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setPrintData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectedSlot = (slot) => {
        setSelectedSlot(slot);
        setPrintData((prev) => ({ ...prev, selectSlot: slot }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        // console.log(printData);

        try {
            const res = await axios.post("http://localhost:8000/api/appointments/create", printData, { withCredentials: true })
            console.log(res.data.message);
        } catch (error) {
            console.log(error);
        }

    };

    return ReactDOM.createPortal(
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <form onSubmit={handleSubmit}>
                <div className="appointment-modal">
                    <div className="cross-icon" onClick={closeModal}>
                        <IoIosCloseCircleOutline className="icon" />
                    </div>
                    <h1 className="patient-heading">Patient Appointment Details</h1>
                    <p className="appointment-doctor-name">Appointment for {doctor.name}</p>

                    <div className="appointment-details">
                        <div className="col-1">
                            <label>
                                First Name:
                                <input type="text" name="firstName" value={printData.firstName} onChange={handleInput} required />
                            </label>
                            <label>
                                Middle Name:
                                <input type="text" name="middleName" value={printData.middleName} onChange={handleInput} />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="lastName" value={printData.lastName} onChange={handleInput} />
                            </label>
                        </div>

                        <div className="col-2">
                            <label>
                                Relation:
                                <input type="text" name="relation" value={printData.relation} onChange={handleInput} required />
                            </label>
                            <label>
                                Mobile Number:
                                <input type="tel" name="mobile" value={printData.mobile} onChange={handleInput} required />
                            </label>
                            <label>
                                Mobile Number 2(Optional):
                                <input type="tel" name="mobile2" value={printData.mobile2} onChange={handleInput} />
                            </label>
                        </div>

                        <div className="col-3">
                            <label>
                                Address:
                                <input type="text" name="address" value={printData.address} onChange={handleInput} required />
                            </label>
                            <label>
                                Age:
                                <input type="number" name="age" value={printData.age} onChange={handleInput} required />
                            </label>
                            <label>
                                Gender:
                                <select name="gender" className="patient-gender" value={printData.gender} onChange={handleInput} required>
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                        </div>

                        <div className="col-4">
                            <label>
                                Appointment Date:
                                <input type="date" name="appointmentDate" value={printData.appointmentDate} onChange={handleInput} required />
                            </label>
                            <label>
                                Date of Birth:
                                <input type="date" name="dateOfBirth" value={printData.dateOfBirth} onChange={handleInput} required />
                            </label>
                        </div>

                        <label>
                            Slots:
                            <div className="slot-chips">
                                {doctor.slots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        className={`slot-chip${selectedSlot === slot ? "-selected" : ""}`}
                                        onClick={() => handleSelectedSlot(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </label>

                        <label>
                            Reason:
                            <textarea name="reason" className="patient-reason" value={printData.reason} onChange={handleInput}></textarea>
                        </label>
                    </div>

                    <button type="submit" className="submit-btn">
                        Book Now
                    </button>

                    {/* <div style={{ display: "none" }}>
                        <AppointmentToPrint
                            ref={componentRef}
                            data={printData}
                            doctor={doctor}
                            hospital={hospital}
                        />
                    </div> */}
                </div >
            </form>
        </>,
        document.querySelector(".appointmentPortal")
    );
};
