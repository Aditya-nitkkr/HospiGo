
import { useLocation } from "react-router-dom";
import StepData from "../api/Step-api.json"
import { Step } from "../UI/StepCard";

export const HowItWorksSection = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";
    return (
        <section className="how-it-works container" style={{
            marginBottom: isAboutPage ? '20rem' : '5rem',
        }}>

            <div className="work-section ">
                <p className="work-heading">How It Works</p>
                <p className="work-para">Search nearby hospitals, explore details, book appointments instantly, and navigate with ease—all in one app</p>
            </div>
            <div className="step-layout">
                <ul className="grid grid-two-cols step-box">{
                    StepData.map((currStep) => {
                        const { id, StepNumber, StepTitle, StepDescription } = currStep;
                        return (
                            <Step key={id} StepNumber={StepNumber} StepTitle={StepTitle} StepDescription={StepDescription} />
                        );
                    })
                }
                </ul>
            </div>

        </section>
    );
}