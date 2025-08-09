import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../pages/Contact.css";
import { toast } from 'react-toastify';


export const Contact = () => {
    const [userQuery, setUserQuery] = useState({
        username: "",
        email: "",
        message: "",

    });

    // handle the auto submit
    const handleOnsubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_soqztyq", "template_yhpvhet", form.current, {
                publicKey: "VJNVaiakLtQ6Is-yh",
            })
            .then(
                () => {
                    toast.success("Mail Send Successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setUserQuery({
                        username: "",
                        email: "",
                        message: "",
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        // console.log(userQuery);

    }

    // handle the user input
    const handleInput = (e) => {
        const { name, value } = e.target;

        setUserQuery({
            ...userQuery,
            [name]: value,
        })
    }

    const form = useRef();

    return (
        <section className="signup-section">
            <div className="signup">
                <div className="container signup-div contact-div">
                    <form ref={form} onSubmit={handleOnsubmit}>
                        <h1>Get in touch with Us</h1>
                        <div className="username">
                            <label htmlFor="name">Username</label>
                            <input type="text"
                                id="name"
                                name="username" placeholder="Enter your Name" autoComplete="off" value={userQuery.username} onChange={handleInput} />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                id="email"
                                placeholder="Enter your Email" autoComplete="off" value={userQuery.email} onChange={handleInput} />

                        </div>
                        <div className="textArea">
                            <label htmlFor="queryMessage">Message</label>
                            <textarea name="message" id="queryMessage" col="30" rows="10" placeholder="Leave us a message" className="message-div" value={userQuery.message} onChange={handleInput} ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>


                    </form>
                </div>

            </div>

        </section>);
}