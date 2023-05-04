import { JobForm } from "./JobForm";
import image from '../assets/anfitrion.webp';

export function JobFormContainer({ jobopenings }) {
    return (
        <section className="JobFormContainer">
            <div className="columns is-desktop is-gapless is-variable is-5">
                <div className="column is-half-desktop">
                    <section className="section">
                        <div className="content">
                            <h1>Ven a trabajar con nosotros</h1>
                            <h5>Únete al equipo</h5>
                            <p>Solicita cualquiera de las posiciones disponibles en nuestra empresa.</p>
                        </div>
                        <div className="columns center-container">
                            <JobForm jobopenings={jobopenings} />
                        </div>
                    </section>
                </div>
                <div className="column is-half-desktop">
                    <img src={image} alt="people in a cafe" className="image is-fullwidth is-fullheight" />
                </div>
            </div>
        </section>
    )
}