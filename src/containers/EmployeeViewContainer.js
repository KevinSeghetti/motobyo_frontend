import EmployeeEditModal from '../components/EmployeeEdit'

//===============================================================================

const EmployeeViewContainer = (props) => {
    console.log("EmployeeViewContainer",props)

   return (
          <div className="employees-viewer">

              <EmployeeEditModal
                readOnly = { true }
                title = "View employee"
                submit = { props.closeDialog }
                fieldData = { props.employee }
              />
      </div>
   )
}

//-------------------------------------------------------------------------------

export default EmployeeViewContainer

