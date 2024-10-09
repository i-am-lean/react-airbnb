import "./index.css";

import Heading from "../heading";

export default function Contacts({
    name,
    title,
    contactImage,
    response_rate,
    response_time,
    phone,
    info,
}) {
    return (
        <div className="contact">
            <div className="contact__header">
                <img className="contact__picture" src={contactImage} alt={name} />
                <div className="contact__title">
                    <Heading>{title}</Heading>
                    <div className="contact__info">
                        <span className="contact__value">{phone}</span>
                        <span className="contact__value">{response_time}</span>
                        <span className="contact__value">{response_rate}</span>
                    </div>
                </div>
            </div>
            <div className="contact__description">{info}</div>
        </div>
    );
}