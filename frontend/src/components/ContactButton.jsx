import { Link } from 'react-router-dom';

export function ContactButton() {
    return (
        <Link to="/#contact">
            <button className="button is-medium contact-button">Contacto</button>
        </Link>
    );
}