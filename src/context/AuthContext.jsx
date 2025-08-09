import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRegister, setUserRegistered] = useState(null);
  const [hospitalAppointments, setHospitalAppointments] = useState(null);
  const [userAppointment, setUserAppointment] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/auth/checkAuthentication", {
        withCredentials: true,
      });
      // console.log(res.data.user);
      if (res.status === 200) {
        setIsAuthenticated(true);
        setUserRegistered(res.data.user);
      }
    } catch (err) {
      setUserRegistered(null);
      setIsAuthenticated(false);
    }
  }
  const fetchingAllAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/appointments/admin", { withCredentials: true });
      // console.log(typeof (res.data.appointments));
      if (res.status === 200) {
        setHospitalAppointments(res.data.appointments);
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  const fetchingUserAppointment = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/appointment", { withCredentials: true });

      // console.log(res.data.userAppointmentData);
      if (res.status === 200) {
        setUserAppointment(res.data.userAppointmentData);
      }

    } catch (error) {
      console.log(error);
    }

  }


  useEffect(() => {
    const initialize = async () => {
      await checkAuth();
      setLoading(false);
    };
    initialize();
  }, []);

  useEffect(() => {
    // console.log(userRegister);
    if (!loading && userRegister) {
      if (userRegister.role === "admin") {
        fetchingAllAppointments();
      } else if (userRegister.role === "patient") {
        fetchingUserAppointment();
      }
    }
  }, [userRegister, loading]);



  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);


  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, setUserInput, userInput, login, logout, userRegister, setUserRegistered, hospitalAppointments, userAppointment }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
