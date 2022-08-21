import './Employee.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmployeeList = (props) => {

   return (
          <div className="employees-container">
         {props.employees.map((employee) => {
            return (
               <Row key={employee.id}>
                 <Col>{employee.id}</Col>
                 <Col>{employee.firstName}</Col>
                 <Col>{employee.middleInitial}</Col>
                 <Col>{employee.lastName}</Col>
                 <Col className="delete-btn">Delete</Col>
               </Row>
            );
         })}
      </div>

   );
};


export default EmployeeList;
