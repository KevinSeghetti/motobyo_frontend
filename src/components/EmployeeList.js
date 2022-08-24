import './Employee.css'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { PersonDashFill,PersonLinesFill } from 'react-bootstrap-icons'


const EmployeeList = (props) => {

   return (
      <Table striped bordered className="employees-list">
         <thead>
           <tr>
             <th>Id</th>
             <th>First Name</th>
             <th>Middle Initial</th>
             <th>Last Name</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
           {
              props.employees.filter( employee =>
                  ( props.showStatus === 'all') ||
                  ( props.showStatus === 'active' && employee.status === true) ||
                  ( props.showStatus === 'inactive' && employee.status === false)
              )
              .map((employee) => {
                 return (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td><Button variant="link" onClick={() => props.viewEmployee(employee)}>{employee.firstName}</Button></td>
                      <td>{employee.middleInitial}</td>
                      <td>{employee.lastName}</td>
                      <td className="edit-btn">
                         <Button className=" btn-edit" size="sm" onClick={() => props.editEmployee(employee)}><PersonLinesFill />&nbsp;Edit</Button>
                      </td>

                      <td className="delete-btn">
                         <Button variant="danger" className=" btn-delete" size="sm" onClick={() => props.deleteEmployee(employee)}><PersonDashFill />&nbsp;Delete</Button>
                      </td>
                    </tr>
                 )
              })
           }
        </tbody>
      </Table>

   )
}


export default EmployeeList
