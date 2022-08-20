import logo from './logo.svg';
import './App.css';


import React, { useState, useEffect } from 'react';

const App = () => {
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      fetch('http://localhost:3000/employees')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setEmployees(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   console.log("results",employees)

   return (
          <div className="employees-container">
         {employees.map((employee) => {
            return (
               <div className="employee-card" key={employee.id}>
                  <h2 className="employee-title">{employee.firstName}</h2>
                  <p className="employee-body">{employee.middleInitial}</p>
                  <p className="employee-body">{employee.lastName}</p>
                  <div className="button">
                  <div className="delete-btn">Delete</div>
                  </div>
               </div>
            );
         })}
      </div>

   );
};




function NotApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
