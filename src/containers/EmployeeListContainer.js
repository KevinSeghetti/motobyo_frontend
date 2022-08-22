
import EmployeeList from '../components/EmployeeList'
import React, { useState, useEffect } from 'react';
import { FetchEmployeeList } from '../common/network.js'

const EmployeeListContainer = () => {
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      FetchEmployeeList(setEmployees)
   }, [])

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

