import './Employee.css';


import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmployeeHeader = (props) => {

   return (
       <div>
       <h1 className="header">Welcome To Employee editing</h1>
        <Button                             onClick={props.newEmployee}>New</Button>
       </div>
   )
}


export default EmployeeHeader;
