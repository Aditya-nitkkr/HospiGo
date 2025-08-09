
import { FaCircleArrowRight } from "react-icons/fa6";
import footerCard from "../api/footer-section-api.json";
import { FooterDisplayCard } from "../components/FooterDisplayCard";
import { ContactRedirect } from "../components/contactRedirect";
import { useLocation } from "react-router-dom";
export const Footer = () => {

    const location = useLocation();
    const isContactPage = location.pathname === "/contact";
    const isHospitalPage = location.pathname.startsWith("/hospital/");
    return (
        <footer>
            { !isHospitalPage && !isContactPage && <ContactRedirect />}
            <div className="container">
                <div className="footer-section">
                    <div className="footer-top">
                        <ul>
                            <li className="application-name">HospiGo</li>
                            {
                                footerCard.map((currData) => {
                                    const { id, title, content1, content2, content3, content4 } = currData;
                                    return (<FooterDisplayCard key={id} title={title} content1={content1} content2={content2} content3={content3} content4={content4} />)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>@copyright all right reserved 2025</p>
                <div className="privacy">
                    <p>privacy & policy</p>
                    <p>  terms & condition</p>
                </div>
            </div>
        </footer>
    );
}
