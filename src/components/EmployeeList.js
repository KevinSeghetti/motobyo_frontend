import './Employee.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EmployeeList = (props) => {

   return (
          <div className="employees-container">
         {props.employees.map((employee) => {
            return (
               <Row key={employee.id}>
                 <Col>{employee.id}</Col>
                 <Col><a href="#" onClick={ () => props.editEmployee(employee) } >{employee.firstName}</a></Col>
                 <Col>{employee.middleInitial}</Col>
                 <Col>{employee.lastName}</Col>
                 <Col className="delete-btn"><Button onClick={() => props.deleteEmployee(employee)}>Delete</Button></Col>
               </Row>
            );
         })}
      </div>

   );
};


export default EmployeeList;
