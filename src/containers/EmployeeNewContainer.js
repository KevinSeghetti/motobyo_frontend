import EmployeeEditModal from '../components/EmployeeEdit'
import React, { useState, useEffect } from 'react'

const EmployeeNewContainer = (props) => {
    const [employeeData, setEmployeeData] = useState([])

   return (
          <div className="employees-container">

              <EmployeeEditModal
                cancelDialog = { props.cancelDialog }
                fieldData = { employeeData }
                setFieldData = { setEmployeeData }
              />
      </div>
   )
}


export default EmployeeNewContainer

