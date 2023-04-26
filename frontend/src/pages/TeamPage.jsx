import React, { useState, useEffect } from 'react';

export function TeamPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/employees/')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="section TeamPage">
      <div className="container is-max-desktop">
        <div className='content'>
          <h1>Conoce al equipo</h1>
          <h4>Nuestros expertos</h4>
          <p>El equipo de TestRestaurant es responsable de que la magia suceda cada día.
            Ellos son la principal razón por la cual nuestros comensales deciden regresar.
            Echa un vistazo y conócelos un poco más.</p>
          {employees.map(employee => (
            <div key={employee.id}>
              <img src={employee.image} alt={employee.name} />
              <h3>{employee.name}</h3>
              <h4>{employee.job_title}</h4>
              <p>{employee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}