export function JobCards({jobopenings}) {

    return (
        <section className="section JobCards">
            <div className="container is-fluid">
                <div className="content">
                    <h1>Oportunidades laborales</h1>
                    <p>Únete a nosotros</p>
                </div>
                <div className="columns is-variable is-5">
                    {jobopenings.map((jobopening) => (
                        <div className="column is-one-third" key={jobopening.id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        <img src={jobopening.image} alt={jobopening.position} />
                                    </figure>
                                </div>
                                <div className="card-content content">
                                    <h3 className="title">{jobopening.position}</h3>
                                    <p >{jobopening.job_type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}