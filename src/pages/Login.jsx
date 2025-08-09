
import { useState } from "react";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from 'react-toastify';


export const Login = () => {
    const [showPassWord1, setShowPassword1] = useState(false);
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const { login, setUserRegistered } = useAuth();

    // handle auto submit
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // sent the validation data to the database
        // console.log(userLogin);
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", userLogin, {
                withCredentials: true,
            });
            // console.log(res.data.user.email);
            // console.log(res.data.user.username);
            // console.log(res);
            const userLoggedIn = res.data.user;
            // console.log(userLoggedIn);
            setUserRegistered(userLoggedIn);
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

            login();
            navigate("/");

        } catch (err) {
            console.log(err.response)
            toast.warn(err.response.data.message || "Login failed",
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

        // reset the input field
        setUserLogin({
            email: "",
            password: ""
        })
    }

    // handle the input given by the user
    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        })
    }

    return (
        <section className="signup-section">
            <div className="signup">
                <div className="container signup-div">
                    <form onSubmit={handleOnSubmit}>
                        <h1>Log in </h1>
                        <div className="email">
                            <label htmlFor="name">Email</label>
                            <input type="text"
                                id="name"
                                name="email" placeholder="Enter your Username" autoComplete="off" required value={userLogin.email} onChange={handleInput} />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type={showPassWord1 ? "text" : "password"} name="password" placeholder="Enter your Password" autoComplete="off" required value={userLogin.password} onChange={handleInput} />
                            <span className="open-btn" onClick={() => setShowPassword1(!showPassWord1)}>
                                {showPassWord1 ? <ImEye /> : <ImEyeBlocked />}
                            </span>
                        </div>


                        <button type="submit" className="submit-btn">
                            Login
                        </button>

                        <div className="auto-authentication">
                            <button className="google" type="button" onClick={() => {
                                window.location.href = "http://localhost:8000/api/auth/google";
                            }} >
                                <FcGoogle className="google-icon" /> <span>Sign Up With Google</span>
                            </button>

                        </div>
                        <div className="have-account">
                            <p>Don't have an account?</p>
                            <NavLink to="/signup">Sign up</NavLink>

                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
}