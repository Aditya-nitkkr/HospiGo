export const FooterDisplayCard = ({ id, title, content1, content2, content3, content4 }) => {
    return (
        <li key={id} className="footer-list">
            <p className="footer-title">{title}</p>
            <p>{content1}</p>
            <p>{content2}</p>
            <p>{content3}</p>
            <p>{content4}</p>
        </li>
    );
}