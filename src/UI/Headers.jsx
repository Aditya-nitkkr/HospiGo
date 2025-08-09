
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';

export const Header = () => {
    const [hovered, setHovered] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/auth/logout", null, {
                withCredentials: true,
            });
            console.log(res.data.message);
            toast.success(res.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            logout();
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (

        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        HospiGo
                    </div>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>

                        <li><NavLink to="/" >Home</NavLink ></li>

                        <li><NavLink to="/about" >About</NavLink ></li>

                        <li><NavLink to="/contact" >Contact Us</NavLink ></li>


                        {!isAuthenticated ? (
                            <>
                                <li>
                                    <NavLink to="/signup"  >
                                        <span
                                            onMouseEnter={() => setHovered(false)}
                                            // onMouseLeave={() => setHovered(true)}
                                            className={hovered ? "sigup-btn" : "login-btn"}>SignUp</span>
                                    </NavLink >
                                </li>
                                <li>
                                    <NavLink to="/login" >
                                        <span
                                            onMouseEnter={() => setHovered(true)}
                                            // onMouseLeave={() => setHovered(true)}
                                            className={hovered ? "login-btn" : "sigup-btn"}>Login</span>
                                    </NavLink >
                                </li>

                            </>) : (<>
                                <li>
                                    <button onClick={handleLogout} className="logout-btn">
                                        Log out
                                    </button>

                                </li>
                                <li>
                                    <NavLink to="/profile" >
                                        <div className="profile">
                                            <CgProfile className="profile-default" />
                                        </div>
                                    </NavLink>
                                </li>
                            </>
                        )
                        }
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    </div>
                </div>
            </div>
        </header >

    );
}