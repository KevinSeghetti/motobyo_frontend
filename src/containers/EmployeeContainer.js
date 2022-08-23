import { useState } from 'react'

import EmployeeHeader from '../components/EmployeeHeader'
import EmployeeListContainer from './EmployeeListContainer'
import EmployeeNewContainer from './EmployeeNewContainer'
import EmployeeEditContainer from './EmployeeEditContainer'
import EmployeeDeleteContainer from './EmployeeDeleteContainer'

import { DeleteEmployee } from'../common/network.js'

//===============================================================================

const EmployeeContainer = (props) => {
   const [showNewDialog, setShowNewDialog] = useState(false)
   const [showDeleteDialog, setShowDeleteDialog] = useState(false)
   const [showEditDialog, setShowEditDialog] = useState(false)
   const [employee, setEmployee] = useState(null)
   const [showStatus, setShowStatus] = useState("active")

   return (
          <div className="employees-container">

            <EmployeeHeader
                newEmployee={(event) => setShowNewDialog(true) }
                updateShowStatus = { setShowStatus }
            />
            <EmployeeListContainer
                showStatus = { showStatus }
                deleteEmployee =
                    {
                        (employee) =>
                        {
                            console.log("EmployeeContainer::delete",employee)
                            setEmployee(employee)
                            setShowDeleteDialog(true)
                        }
                    }
                editEmployee =
                    {
                        (employee) =>
                        {
                            console.log("EmployeeContainer::edit",employee)
                            setEmployee(employee)
                            setShowEditDialog(true)
                        }
                    }
                />

            { showNewDialog === true &&
                <EmployeeNewContainer
                  closeDialog = { () => setShowNewDialog(false) }
                  newEmployee = { props.newEmployee }
                />
            }
            { showEditDialog === true &&
                <EmployeeEditContainer
                  closeDialog = { () => setShowEditDialog(false) }
                  employee = { employee }
                />
            }
            { showDeleteDialog === true &&
                <EmployeeDeleteContainer
                  closeDialog = { () => setShowDeleteDialog(false) }
                  employee = { employee }
                  deleteEmployee = { () => { DeleteEmployee(employee) } }
                />
            }
      </div>
   )
}

export default EmployeeContainer

