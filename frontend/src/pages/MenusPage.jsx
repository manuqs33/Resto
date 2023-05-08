import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function MenusPage() {

    const [mainDishesData, setMainDishesData] = useState([]);
    const [startersData, setStartersData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/dishes/notrecommended/');
                const mainList = response.data
                const starters = mainList.filter(item => item.dish_type === 'Entrada');
                const mainDishes = mainList.filter(item => item.dish_type === 'Plato principal');
                setMainDishesData(mainDishes);
                setStartersData(starters);
            } catch (error) {
                console.error(error)
            }
        };

        fetchData();
    }, []);
    return (
        <div className='MenusPage'>
            <section className="section">
                <div className="container is-max-widescreen">
                    <div className="content">
                        <h1 className="title">Menú</h1>
                        <h3>Servido diariamente entre las 12:00 y las 23:00</h3>
                        <h2 className="title">Platos principales</h2>
                        <p>Saborea el corazón de tu comida con nuestra selección de deliciosos platos principales, elaborados con los ingredientes más frescos</p>
                    </div>
                    <div className="columns is-multiline">
                        {mainDishesData.map(item => (
                            <div className="column is-one-third" key={item.id}>
                                <div className="card is-4">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={item.image} alt={item.name} />
                                        </figure>
                                    </div>
                                    <div className="card-content content">
                                        <h4>{item.name}</h4>
                                        <p className="subtitle is-6">{item.description}</p>
                                        <p className="subtitle is-5">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="content">
                        <h2 className="title">Entradas</h2>
                        <p>Comience su comida con uno de nuestras deliciosas entradas, perfectas para compartir antes de su plato principal.</p>
                    </div>
                    <div className="columns is-multiline">
                        {startersData.map(item => (
                            <div className="column is-one-third" key={item.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={item.image} alt={item.name} />
                                        </figure>
                                    </div>
                                    <div className="card-content content">
                                        <h4>{item.name}</h4>
                                        <p className="subtitle is-6">{item.description}</p>
                                        <p className="subtitle is-5">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}