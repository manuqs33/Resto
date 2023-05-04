import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    position: '',
    interview_date: '',
    cv_link: '',
};

export function JobForm({ jobopenings }) {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)
        const allFilled = Object.values(formData).every(val => val !== '')

        if (!allFilled) {
            toast.dark('Todos los campos son obligatorios', { autoClose: 1500, position: 'bottom-center' })
            return
        }

        try {
            await axios.post('http://127.0.0.1:8000/job_applications/"', formData)
            setFormData(INITIAL_STATE)
            setFormErrors({})
            toast.success('Su aplicación se ha procesado con éxito.', { autoClose: 1500, position: 'bottom-center' })
        } catch (error) {
            console.error(error)
            toast.warning('Su aplicación se ha procesado con éxito.', { autoClose: 1500, position: 'bottom-center' })
        }
    };

    return (
        <>
            <form className="form JobForm" onSubmit={handleSubmit}>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <select className="select" name="position" value={formData.position} onChange={handleChange}>
                                    {jobopenings.map(jobopening => (
                                        <option key={jobopening.id}  value={jobopening.id} >{jobopening.position}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* segundos tres */}
                    <div className="column">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="123-456-7890"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    name="interview_date"
                                    type="datetime-local"
                                    value={formData.interview_date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input
                            className="input"
                            name="cv_link"
                            value={formData.cv_link}
                            onChange={handleChange}
                        />
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

            </form>
            <div><ToastContainer /></div>
        </>
    )
}