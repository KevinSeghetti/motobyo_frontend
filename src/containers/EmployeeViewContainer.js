import EmployeeEditModal from '../components/EmployeeEdit'
import React, { useState } from 'react'
import { UpdateEmployee } from'../common/network.js'

//===============================================================================

const EmployeeViewContainer = (props) => {
    console.log("EmployeeViewContainer",props)
    const [employeeData, setEmployeeData] = useState(props.employee)

   return (
          <div className="employees-viewer">

              <EmployeeEditModal
                readOnly = { true }
                title = "View employee"
                submit = { props.closeDialog }
                fieldData = { employeeData }
              />
      </div>
   )
}

//-------------------------------------------------------------------------------

export default EmployeeViewContainer

