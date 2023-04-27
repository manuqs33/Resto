import anfitrion from '../assets/anfitrion.webp'

export function Hero() {
    return (
        <section className="section Hero">
            <div className="container is-fluid">
                <div className="columns">
                    <div className="column is-half">
                        <img src={anfitrion} className='image' alt="waiter serving a table with people" />
                    </div>
                    <div className="column is-half">
                        <h1>Bebe. Come. </h1>
                        <h1>Relájate.</h1>
                        <p>Despierta tus sentidos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
