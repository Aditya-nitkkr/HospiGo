import { useNavigate } from "react-router-dom";

export const Hospital = ({ currHospital }) => {

    const navigate = useNavigate();
    const handleHospitalDetails = () => {
        navigate(`/hospital/${currHospital.id}`);

    }
    return (
        <li className="hospital-main">
            <img src={currHospital.image} alt="" width="40%" height="50%" className="nearby-hospital-image" />
            <section className="hospital-card-right">
                <div className="hospital-top-name">
                    <h1>{currHospital.name}</h1>
                    <p>Contact-No: {currHospital.reception.phone}</p>
                </div>
                <p>{currHospital.location.address}</p>
                <p className="hospital-main-desc-content">{currHospital.details.description}</p>
                <div className="button-list">
                    <button className="hospital-btn" onClick={handleHospitalDetails}> view details</button>
                </div>
            </section>
        </li>
    );

}