export const Card = ({ id, image, title, description }) => {
    return (
        <li className="why-choose-section-list" key={id}>
            <div className="why-choose-card grid grid-two-cols">
                <img src={image} alt=" appointment image" />
                <div className="why-choose-heading">
                    <p className="why-choose-subheading"> {title}</p>
                    <p className="why-choose-subpara">{description}</p>
                </div>
            </div>
        </li>
    );

}