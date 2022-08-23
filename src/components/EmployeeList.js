import './Employee.css';

import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EmployeeList = (props) => {

   return (
      <div className="employees-list">
         <Row >
           <Col>Id</Col>
           <Col>First Name</Col>
           <Col>Middle Initial</Col>
           <Col>Last Name</Col>
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
                    <Col><Button variant="link" onClick={() => props.editEmployee(employee)}>{employee.firstName}</Button></Col>
                    <Col>{employee.middleInitial}</Col>
                    <Col>{employee.lastName}</Col>
                    <Col className="delete-btn"><Button size="sm" onClick={() => props.deleteEmployee(employee)}>Delete</Button></Col>
                  </Row>
               )
            })
         }
      </div>

   );
};


export default EmployeeList;
