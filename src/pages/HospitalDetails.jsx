import { useParams } from "react-router-dom";
import HospitalData from "../../backend/hospital_data/rewari_hospitals_10.json";
import { Header } from "../UI/Headers";
import "./HospitalDetails.css";
import { FiPhoneCall } from "react-icons/fi";
import { DoctorDetails } from "../UI/DoctorDetails";
import { Footer } from "../UI/Footer";

export const HospitalDetails = () => {
    const { id } = useParams();
    const hospital = HospitalData.filter((currHospital) => currHospital.id == id)[0];
    console.log(hospital);

    return <>
        <Header />
        <section className="hospital-detail-main">
            <main className="image-hospital">
                <img src={hospital.image} alt={hospital.name} />
                <div className="hospital-right-main">
                    <p className="hospital-name">{hospital.name}</p>
                    <p className="hospital-right-add">{hospital.location.address} , {hospital.location.state}</p>
                    <p className="hospital-right-des">{hospital.details.description}</p>
                    <p className="hospital-right-spec">Speciality : <span >{hospital.details.services.map((ele) => {
                        return (
                            <div className="hospital-right-services-btn">
                                <button className="hospital-right-services"> {ele}</button>
                            </div>);
                    })}</span></p>
                    <button className="hospital-right-btn">
                        <FiPhoneCall />
                        Contact No: {hospital.reception.phone}
                    </button>
                </div>
            </main>

            <div className="doctors-section-cards ">
                {
                    hospital.doctors.map((currDoctor) => {
                        return <DoctorDetails doctor={currDoctor} key={currDoctor.id} hospital={hospital} />
                    })
                }
            </div>
            <div className="emergency-services ">
                <div className="emergency-left">
                    <h3>Emergency Services</h3>
                    <ul className="emergency-list">
                        {
                            hospital.details.emergency_services.map((service, idx) => (
                                <li key={idx}>
                                    <p className="services-name">
                                        {service.name}
                                    </p>
                                    <p className="services-provided">{service.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="ambulance-details">
                        <p>Need Help ?</p>
                        <button className="ambulance-contact"> Contact : {hospital.ambulance.phone}</button>
                    </div>
                </div>
                <div className="emergency-right">
                    <img
                        src="/emergency-services.jpg"
                        alt="Ambulance"
                        className="emergency-ambulance-img"
                    />
                </div>
            </div>
        </section>
    </>
};
