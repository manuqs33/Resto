import axios from 'axios'
import { useState } from 'react'
export function ReviewForm() {
    const [formData, setFormData] = useState({})
    const [success, setSuccess] = useState(false)

    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post('http://127.0.0.1:8000/reviews/', formData)
        setFormData({})
        setSuccess(true)
    }

    const successMessage = "Su mensaje se ha enviado con éxito."

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="columns">
                <div className="column is-one-half">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Tu nombre"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="column is-one-half">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Tu apellido"
                                name="surname"
                                value={formData.surname}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input
                        className="input"
                        type="email"
                        placeholder="Tu email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <textarea
                        className="textarea"
                        placeholder="¿Cómo podemos mejorar?"
                        name="reviewText"
                        value={formData.reviewText}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <div className="buttons is-right">
                        <button type="submit" className="button is-medium review-form-button">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>

        </form >
    )
}