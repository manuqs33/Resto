import axios from 'axios'
import { useState } from 'react'

export function MessageForm() {
    const [formData, setFormData] = useState({})
    const [success, setSuccess] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post('http://127.0.0.1:8000/messages/', formData)
        setFormData({})
        setSuccess(true)
        console.log(response)
    }

    const successMessage = "Su mensaje se ha enviado con éxito."

    return (
        <form className="MessageForm" onSubmit={handleSubmit}>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input" type="text" name="name" value={formData.name ?? ''} onChange={handleChange} placeholder="Tu nombre" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Dirección</label>
                        <div className="control">
                            <input className="input" type="text" name="address" value={formData.address ?? ''} onChange={handleChange} placeholder="Tu dirección" />
                        </div>
                    </div>
                </div>
                <div className="column">

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" name="email" value={formData.email ?? ''} onChange={handleChange} placeholder="Email" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Teléfono</label>
                        <div className="control">
                            <input className="input" type="tel" name="phone" value={formData.phone ?? ''} onChange={handleChange} placeholder="Tu número de teléfono" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Asunto</label>
                <div className="control">
                    <input className="input" type="text" name="subject" value={formData.subject ?? ''} onChange={handleChange} placeholder="Asunto de tu mensaje" />
                </div>
            </div>

            <div className="field">
                <label className="label">Mensaje</label>
                <div className="control">
                    <textarea className="textarea" name="message_text" value={formData.message_text ?? ''} onChange={handleChange} placeholder="Tu mensaje"></textarea>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <div className="buttons is-right">
                        <button className="button is-medium message-form-button" type="submit">Enviar</button>
                    </div>
                </div>
            </div>
            <div>
                {success && <p>{successMessage}</p>}
            </div>
        </form>
    )
}