export const Step = ({ id, StepNumber, StepTitle, StepDescription }) => {
    return (
        <li className="step-box-list" key={id}>
            <p className="step-number">{StepNumber}</p>
            <p className="step-title">{StepTitle}</p>
            <p className="step-desc">{StepDescription}</p>
        </li>
    );
}