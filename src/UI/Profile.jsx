import { ShowAppointment } from "../components/ShowAppointment";
import { UserAppointment } from "../components/UserAppointment";
import { useAuth } from "../context/AuthContext";
import { Header } from "./Headers";
import "./profile.css";

export const Profile = () => {
    const { loading, userRegister, hospitalAppointments, userAppointment } = useAuth();

    if (loading || !userRegister) {
        return <div className="profile-main"><p>Loading profile...</p></div>; 
    }

    return (
        <>
            <Header />
            <div className="profile-main" >
                <h2 className="profile-heading">Welcome {userRegister?.username}</h2>
                <div className="main-container">
                    <div className="profile-container-main">
                        <img
                            src="/user-default.png"
                            alt="Profile"
                            className="profile-image"
                        />
                        <h3 className="profile-username">{userRegister?.username}</h3>
                        <p className="profile-email" >{userRegister?.email}</p>
                        <p className="profile-role">Role: {userRegister?.role || "Patient"} </p>
                        <button className="edit-profile-btn" >
                            Edit Profile
                        </button>
                    </div>
                    {userRegister.role === "admin" && <ul>
                        {
                            Object.entries(hospitalAppointments).map(([key, appointment]) => (
                                <ShowAppointment className="profile-appointment" key={key} patient={appointment} />
                            ))
                        }
                    </ul>
                    }
                    {
                        userRegister.role === "patient" &&
                        //patient's appointment
                        <ul>
                            {
                                Object.entries(userAppointment).map(([key, appointment]) => (
                                    <UserAppointment className="profile-appointment" key={key} patientAppointment={appointment} />
                                ))
                            }

                        </ul>
                    }
                </div>
            </div>
        </>
    );
}