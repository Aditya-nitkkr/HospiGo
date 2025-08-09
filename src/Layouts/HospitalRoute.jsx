// HospitalRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

export const HospitalRoute = () => {
    const { userInput } = useAuth();
    const formattedUserInput = userInput.trim().toLowerCase();
    const location = useLocation();
    const toastShown = useRef(false);

    useEffect(() => {
        if (formattedUserInput !== "rewari" && !toastShown.current) {
            toast.error(`Please search "Rewari" for Demo`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            toastShown.current = true;
        }
    }, [formattedUserInput]);

    if (formattedUserInput !== "rewari") {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;
};
