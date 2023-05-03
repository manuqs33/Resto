import { JobForm } from "./JobForm";
import image from '../assets/anfitrion.webp';

export function JobFormContainer() {
    return (
        <section className="JobFormContainer">
                    <div className="columns is-gapless">
                        <div className="column is-half">
                            <JobForm />
                        </div>
                        <div className="column is-half">
                            <img src={image} alt="people in a cafe" className="image is-fullwidth is-fullheight" />
                        </div>
                    </div>
        </section>
    )
}