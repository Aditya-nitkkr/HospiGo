
import { useState } from "react";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from 'react-toastify';


export const SignUp = () => {
    const [showPassWord1, setShowPassword1] = useState(false);
    const [showPassWord2, setShowPassword2] = useState(false);
    const { login, setUserRegistered } = useAuth();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate();

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        //validate the password and confirm password
        if (user.password !== user.confirmPassword) {
            toast.warn("Password is not Matching!");
            return;
        }

        //  sent the user credential to the database
        // console.log(user);
        try {
            const res = await axios.post("http://localhost:8000/api/auth/signup", user, {
                withCredentials: true,
            });
            // console.log(res);
            const userLoggedIn = res.data.user;
            setUserRegistered(userLoggedIn);

            login();
            navigate("/");
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

            // reset the input field
            setUser({
                username: "", email: "",
                password: "",
                confirmPassword: "",
            })

        } catch (err) {
            // console.log(err);

            console.log(err.response);
            if (err.response.status == 400) {
                login();
                navigate("/");
            }
            else {
                toast.warn(err.response.data.extraDetails || "Signup failed",
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                    });
            }
        }


    }

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({
            ...user,
            [name]: value,
        })

    }
    return (
        <section className="signup-section">
            <div className="signup">
                <div className="container signup-div">
                    <form onSubmit={handleOnSubmit}>
                        <h1>Create an Account</h1>
                        <p className="sigin-text">Join now to streamline your experience from day one.</p>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                id="username"
                                name="username" placeholder="Enter your Username" autoComplete="off" value={user.username} onChange={handleInput} required />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                id="email"
                                placeholder="Enter your Email" autoComplete="off" value={user.email} onChange={handleInput} required />

                        </div>
                        <div className="password">
                            <label htmlFor="password"> Set Password</label>
                            <input type={showPassWord1 ? "text" : "password"} placeholder="Enter your Password" name="password" autoComplete="off" value={user.password} onChange={handleInput} required />
                            <span className="open-btn" onClick={() => setShowPassword1(!showPassWord1)}>
                                {showPassWord1 ? <ImEye /> : <ImEyeBlocked />}
                            </span>
                        </div>

                        <div className="confirmPassword">
                            <label htmlFor="confirm password">Confirm Password</label>
                            <input type={showPassWord2 ? "text" : "password"} name="confirmPassword"
                                id="password" placeholder="Confirm your Password" autoComplete="off" value={user.confirmPassword} onChange={handleInput} required />
                            <span className="open-btn" onClick={() => setShowPassword2(!showPassWord2)}>
                                {showPassWord2 ? <ImEye /> : <ImEyeBlocked />}
                            </span>
                        </div>
                        <button type="submit" className="submit-btn">
                            Register
                        </button>

                        <div className="auto-authentication">
                            <button
                                className="google"
                                type="button"
                                onClick={() => {
                                    window.location.href = "http://localhost:8000/api/auth/google";
                                }}
                            >
                                <FcGoogle className="google-icon" /> <span>Sign Up With Google</span>
                            </button>
                            
                        </div>
                        <div className="have-account">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Log in</NavLink>

                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
}