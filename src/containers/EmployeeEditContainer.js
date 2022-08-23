import EmployeeEditModal from '../components/EmployeeEdit'
import React, { useState } from 'react'
import { UpdateEmployee } from'../common/network.js'

//===============================================================================

const EmployeeEditContainer = (props) => {
    console.log("EmployeeEditContainer",props)
    const [employeeData, setEmployeeData] = useState(props.employee)

   return (
          <div className="employees-editor">

              <EmployeeEditModal
                title = "Edit employee"
                cancelDialog = { props.closeDialog }
                submit = { () =>
                    {
                        UpdateEmployee(employeeData)
                        // currently the edit employee dialog appears in front
                        // of the employee list, so closing the dialog automatically
                        // reloads the list. If we were using a network cache
                        // we would need to send a cache invalidation message at this point
                        // or implement versioning on the server, and have the post
                        // return a new list version

                        props.closeDialog()
                    }
                }
                fieldData = { employeeData }
                setFieldData = { setEmployeeData }
              />
      </div>
   )
}

//-------------------------------------------------------------------------------

export default EmployeeEditContainer

