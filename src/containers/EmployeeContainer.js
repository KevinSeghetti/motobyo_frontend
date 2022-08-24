import { useState } from 'react'

import EmployeeHeader from '../components/EmployeeHeader'
import EmployeeListContainer from './EmployeeListContainer'
import EmployeeNewContainer from './EmployeeNewContainer'
import EmployeeEditContainer from './EmployeeEditContainer'
import EmployeeViewContainer from './EmployeeViewContainer'
import EmployeeDeleteContainer from './EmployeeDeleteContainer'

import { DeleteEmployee } from'../common/network.js'

//===============================================================================

const EmployeeContainer = (props) => {
   const [showNewDialog, setShowNewDialog] = useState(false)
   const [showDeleteDialog, setShowDeleteDialog] = useState(false)
   const [showEditDialog, setShowEditDialog] = useState(false)
   const [showViewDialog, setShowViewDialog] = useState(false)
   const [employee, setEmployee] = useState(null)
   const [showStatus, setShowStatus] = useState("active")
   // kts is this the best way to do this?
   const [redrawListCounter, setRedrawListCounter] = useState(0)

   let ReloadList = () =>
   {
       console.log("EmployeeContainer:reload list",redrawListCounter)
       setRedrawListCounter(redrawListCounter+1)
   }
   return (
          <div className="employees-container">

            <EmployeeHeader
                newEmployee={(event) => setShowNewDialog(true) }
                updateShowStatus = { setShowStatus }
            />
            <EmployeeListContainer
                showStatus = { showStatus }
                redrawListCounter = { redrawListCounter }
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
                viewEmployee =
                    {
                        (employee) =>
                        {
                            console.log("EmployeeContainer::view",employee)
                            setEmployee(employee)
                            setShowViewDialog(true)
                        }
                    }
                />

            { showNewDialog === true &&
                <EmployeeNewContainer
                  closeDialog = { () => setShowNewDialog(false) }
                  reloadList = { ReloadList }
                />
            }
            { showEditDialog === true &&
                <EmployeeEditContainer
                  reloadList = { ReloadList }
                  closeDialog = { () => setShowEditDialog(false) }
                  employee = { employee }
                />
            }
            { showViewDialog === true &&
                <EmployeeViewContainer
                  closeDialog = { () => setShowViewDialog(false) }
                  employee = { employee }
                />
            }

            { showDeleteDialog === true &&
                <EmployeeDeleteContainer
                  closeDialog = { () => setShowDeleteDialog(false) }
                  employee = { employee }
                  deleteEmployee = { () =>
                     {
                        DeleteEmployee(employee)
                        ReloadList()
                     }
                  }
                />
            }
      </div>
   )
}

export default EmployeeContainer

