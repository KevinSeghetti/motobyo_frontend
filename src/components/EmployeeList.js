import './Employee.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { PersonDashFill,PersonLinesFill } from 'react-bootstrap-icons'

const EmployeeList = (props) => {

   return (
      <div className="employees-list">
         <Row >
           <Col>Id</Col>
           <Col>First Name</Col>
           <Col>Middle Initial</Col>
           <Col>Last Name</Col>
           <Col>Edit</Col>
           <Col>Delete</Col>
         </Row>


         {
            props.employees.filter( employee =>
                ( props.showStatus === 'all') ||
                ( props.showStatus === 'active' && employee.status === true) ||
                ( props.showStatus === 'inactive' && employee.status === false)
            )
            .map((employee) => {
               return (
                  <Row key={employee.id}>
                    <Col>{employee.id}</Col>
                    <Col><Button variant="link" onClick={() => props.viewEmployee(employee)}>{employee.firstName}</Button></Col>
                    <Col>{employee.middleInitial}</Col>
                    <Col>{employee.lastName}</Col>
                    <Col className="edit-btn">
                       <Button className=" btn-edit" size="sm" onClick={() => props.editEmployee(employee)}><PersonLinesFill />&nbsp;Edit</Button>
                    </Col>

                    <Col className="delete-btn">
                       <Button variant="danger" className=" btn-delete" size="sm" onClick={() => props.deleteEmployee(employee)}><PersonDashFill />&nbsp;Delete</Button>
                    </Col>
                  </Row>
               )
            })
         }
      </div>

   )
}


export default EmployeeList
