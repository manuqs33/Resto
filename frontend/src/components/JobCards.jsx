import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function JobCards({jobopenings}) {

    return (
        <section className="section JobCards">
            <div className="container is-fluid">
                <div className="content">
                    <h1>Platos destacados</h1>
                    <p>Frescura y calidad</p>
                </div>
                <div className="columns">
                    {jobopenings.map((jobopening) => (
                        <div className="column is-one-third" key={jobopening.id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
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