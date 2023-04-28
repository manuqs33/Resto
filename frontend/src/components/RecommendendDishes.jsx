import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function RecommendendDishes() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            const response = await axios.get('http://127.0.0.1:8000/dishes/recommended/');
            setDishes(response.data);
        };

        fetchDishes();
    }, []);

    return (
        <section className="section RecommendedDishes">
            <div className="container is-fluid">
                <div className="content">
                    <h1>Platos destacados</h1>
                    <p>Frescura y calidad</p>
                </div>
                <div className="columns">
                    {dishes.map((dish) => (
                        <div className="column is-one-third" key={dish.id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={dish.image} alt={dish.name} />
                                    </figure>
                                </div>
                                <div className="card-content content">
                                    <h3 className="title">{dish.name}</h3>
                                    <p >{dish.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}