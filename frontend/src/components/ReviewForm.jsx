import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function ReviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        review_text: ''})
    const [filled, setFilled] = useState(false)



    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        const allFilled = Object.values(formData).every(val => val !== '')
        setFilled(allFilled)
    }


    async function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        console.log(filled)
        if (filled) {
            const response = await axios.post('http://127.0.0.1:8000/reviews/', formData)
            setFormData({})
            toast.success('Su mensaje se ha enviado con éxito.', { autoClose: 1500, position: 'bottom-center'})
        } else {
            toast.dark('Todos los campos son obligatorios', { autoClose: 1500, position: 'bottom-center'})
        }
    }


    return (
        <form className="form ReviewForm" onSubmit={handleSubmit}>
            <div className="columns">
                <div className="column is-one-half">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Tu nombre"
                                name="name"
                                value={formData.name ?? ''}
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
                                value={formData.surname ?? ''}
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
                        value={formData.email ?? ''}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <textarea
                        className="textarea"
                        placeholder="¿Cómo podemos mejorar?"
                        name="review_text"
                        value={formData.review_text ?? ''}
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
            <div>
                <ToastContainer />
            </div>

        </form >
    )
}