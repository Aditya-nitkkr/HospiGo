
import HospitalList from "../../backend/hospital_data/rewari_hospitals_10.json";
import { Header } from "../UI/Headers";
import { Hospital } from "./HospitalPage";
import "./HospitalPage.css";


const NearbyHospitals = () => {
    return (<>
        <Header />
        <ul className="container">
            {
                HospitalList.map((currHospital) => {
                    return (
                        <Hospital key={currHospital.id} currHospital={currHospital} />
                    );
                })
            }
        </ul>

    </>);
};

export default NearbyHospitals;
