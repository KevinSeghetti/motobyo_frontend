
import EmployeeList from '../components/EmployeeList'
import React, { useState, useEffect } from 'react';
import { FetchEmployeeList } from '../common/network.js'

const EmployeeListContainer = (props) => {
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      FetchEmployeeList(setEmployees)
   }, [])

   //console.log("EmployeeListContainer:results",employees)

   return (
          <div className="employees-container">

          <EmployeeList
               employees      = { employees }
               editEmployee   = { props.editEmployee }
               deleteEmployee = { props.deleteEmployee }
          />
      </div>
   );
};

export default EmployeeListContainer;

