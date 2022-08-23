import ConfirmationModal from '../components/ConfirmationModal'
import React, { useState } from 'react'
import { PostNewEmployee } from'../common/network.js'

//===============================================================================

const EmployeeDeleteContainer = (props) => {

   return (
          <div className="employees-container">

              <ConfirmationModal
                title = "Delete Employee"
                body = { "Are you sure you want to delete employee named "+props.employee.firstName}
                cancelDialog = { props.closeDialog }
                submit = { () =>
                    {
                        props.deleteEmployee()

                        // currently the delete employee dialog appears in front
                        // of the employee list, so closing the dialog automatically
                        // reloads the list. If we were using a network cache
                        // we would need to send a cache invalidation message at this point
                        // or implement versioning on the server, and have the post
                        // return a delete list version
                        props.closeDialog()
                    }
                }
              />
      </div>
   )
}

//-------------------------------------------------------------------------------

export default EmployeeDeleteContainer

