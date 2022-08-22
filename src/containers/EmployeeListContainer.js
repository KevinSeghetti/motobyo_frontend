
import EmployeeList from '../components/EmployeeList'
import React, { useState, useEffect } from 'react';

const EmployeeListContainer = () => {
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

          <EmployeeList
               employees={employees}
          />
      </div>
   );
};

export default EmployeeListContainer;

