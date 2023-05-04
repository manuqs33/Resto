import { useState, useEffect } from 'react';
import { JobCards } from "../components/JobCards"
import { JobForm } from "../components/JobForm"
import { JobFormContainer } from "../components/JobFormContainer"
import axios from 'axios';

export function JobOpeningsPage() {
    const [jobopenings, setJobOpenings] = useState([]);

    useEffect(() => {
        async function fetchJobOpenings() {
            const response = await axios.get('http://127.0.0.1:8000/job_openings');
            setJobOpenings(response.data);
        };

        fetchJobOpenings();
    }, []);

    return (
        <>
            <JobCards jobopenings={jobopenings} />
            <JobFormContainer jobopenings={jobopenings}/>
        </>
    )
}