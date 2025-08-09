
import "./home.css";
import "../App.css";
import { HeroSection } from "../components/HeroSection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { HospitalCard } from "../components/HospitalCard";

export const Home = () => {

    return (
        <>
            <HeroSection />
            <WhyChooseSection />
            <HowItWorksSection />
            <HospitalCard />
        </>

    );
}