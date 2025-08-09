import { Card } from "../UI/why-choose-card";
import chhoseCard from "../api/why-choose-api.json";

export const WhyChooseSection = () => {

    return (
        <section className="why-choose-section">
            <div className="container">
                <div className="choose-section">
                    <p className="choose-heading">Why Choose Us</p>
                    <p className="choose-para">Finding the right hospital and booking an appointment should be fast, easy, and stress-free. Our platform is designed to provide a seamless experience so you can focus on your health, not the hassle of searching for care.</p>
                </div>
                <div className="why-choose-info  grid grid-two-cols">
                    {
                        chhoseCard.map((currData) => {
                            // console.log(currData);
                            const { id, image, title, description } = currData;
                            return <Card key={id} title={title} description={description} image={image} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}