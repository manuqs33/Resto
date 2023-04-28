import { ContactButton } from "./ContactButton";

export function Banner() {
    return (
        <section className="section Banner">
            <div className="container is-fluid">
                <div className='content container is-max-desktop'>
                    <h1>Sobre nosotros</h1>
                    <p>Comenzamos nuestro negocio en el año 2000 con un objetivo en mente: entregar una experiencia gastronómica única en Ciudad de México. Gracias a nuestra experiencia y dedicación, hemos logrado convertirnos en maestros de la industria. Entregando platillos frescos, sustanciosos e inolvidables.</p>
                    <ContactButton />
                </div>
            </div>
        </section>
    )
}


