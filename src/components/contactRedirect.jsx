import { FaCircleArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const ContactRedirect = () => {
    return (
        <div className="contact-card">
            <div className="contact-us-redirect-card">
                <figure>
                    <img src="contact-image.png" alt="" />
                </figure>
                <div className="contact-card-content">
                    <p className="contact-card-title">get in touch with us</p>
                    <div className="get-btn">
                        <NavLink to="/contact">
                            <button type="button" className="get-started-btn"
                            >Contact Us
                                <FaCircleArrowRight className="right-arrow" />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}