import EmployeeEditModal from '../components/EmployeeEdit'
import React, { useState } from 'react'
import { PostNewEmployee } from'../common/network.js'

//===============================================================================

const EmployeeNewContainer = (props) => {
    const [employeeData, setEmployeeData] = useState([])

   return (
          <div className="employees-new">

              <EmployeeEditModal
                title="Create new employee"
                cancelDialog = { props.closeDialog }
                submit = { () =>
                    {
                        PostNewEmployee(employeeData)
                        // currently the new employee dialog appears in front
                        // of the employee list, so we need to be sure to trigger
                        // a reload of the list.

                        props.closeDialog()
                        props.reloadList()
                    }
                }
                fieldData = { employeeData }
                setFieldData = { setEmployeeData }
              />
      </div>
   )
}

//-------------------------------------------------------------------------------

export default EmployeeNewContainer

