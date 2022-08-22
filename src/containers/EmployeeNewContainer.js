import EmployeeEditModal from '../components/EmployeeEdit'
import React, { useState } from 'react'
import { PostNewEmployee } from'../common/network.js'

//===============================================================================

const EmployeeNewContainer = (props) => {
    const [employeeData, setEmployeeData] = useState([])

   return (
          <div className="employees-container">

              <EmployeeEditModal
                closeDialog = { props.closeDialog }
                submit = { () =>
                    {
                        PostNewEmployee(employeeData)
                        // currently the new employee dialog appears in front
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

export default EmployeeNewContainer

