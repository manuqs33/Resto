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

export function JobForm() {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const allFilled = Object.values(formData).every(val => val !== '')

        if (!allFilled) {
            toast.dark('Todos los campos son obligatorios', { autoClose: 1500, position: 'bottom-center'})
            return
        }

        try {
            await axios.post('http://127.0.0.1:8000/job_applications/"', formData)
            setFormData(INITIAL_STATE)
            setFormErrors({})
            toast.success('Su aplicación se ha procesado con éxito.', { autoClose: 1500, position: 'bottom-center'})
        } catch (error) {
            console.error(error)
            toast.warning('Su aplicación se ha procesado con éxito.', { autoClose: 1500, position: 'bottom-center'})
        }
    };

    return (
        <>
        <section className="section JobForm">
            <div className="container is-fluid">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
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
                        <label className="label">Surname</label>
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
                        <label className="label">Email</label>
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
                        <label className="label">Phone</label>
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
                        <label className="label">Position</label>
                        <div className="control">
                            <input
                                className="input"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="Frontend Developer"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Interview Date</label>
                        <div className="control">
                            <input
                                className="input"
                                name="interview_date"
                                type="date"
                                value={formData.interview_date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">CV Link</label>
                        <div className="control">
                            <input
                                className="input"
                                name="cv_link"
                                value={formData.cv_link}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </form>
            </div>
        </section>
        <ToastContainer />
        </>
    )
}