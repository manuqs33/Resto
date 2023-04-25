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
    <div className='TeamPage'>
      <h1>Conoce al equipo</h1>
      <h3>Nuestros expertos</h3>
      <p>El equipo de TestRestaurant es responsable de que la magia suceda cada día.
        Ellos son la principal razón por la cual nuestros comensales deciden regresar.
        Echa un vistazo y conócelos un poco más.</p>
      {employees.map(employee => (
        <div key={employee.id}>
          <img src={employee.image} alt={employee.name} />
          <h2>{employee.name}</h2>
          <h3>{employee.title}</h3>
          <p>{employee.description}</p>
        </div>
      ))}
    </div>
  );
}