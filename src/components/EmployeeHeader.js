import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Navbar from 'react-bootstrap/Navbar'
import { PersonPlus } from 'react-bootstrap-icons'


//-------------------------------------------------------------------------------

import './Employee.css'

//-------------------------------------------------------------------------------

const EmployeeHeader = (props) => {
   return (
      <div>
         <Row>
            <Col xs="12">
               <h1 className="header">Welcome To Employee editing</h1>
            </Col>
         </Row>
         <Navbar>
            <Row>
               <Col>
                  <DropdownButton id="dropdown-basic-button" title="Filter"
                     onSelect = { (key) => props.updateShowStatus(key) }
                     >
                     <Dropdown.Item eventKey="active"  >Active</Dropdown.Item>
                     <Dropdown.Item eventKey="inactive">Inactive</Dropdown.Item>
                     <Dropdown.Item eventKey="all"     >All</Dropdown.Item>
                  </DropdownButton>
               </Col>
               <Col>
                  <Button size='sm' onClick={props.newEmployee}><PersonPlus /> New</Button>
               </Col>
            </Row>
         </Navbar>
      </div>
   )
}

export default EmployeeHeader
