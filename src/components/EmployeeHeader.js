import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

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

         <Navbar bg="light" >
            <Container>
               <Navbar.Text>
                  <DropdownButton id="dropdown-basic-button" title={ "Filter: "+props.showStatus }
                        onSelect = { (key) => props.updateShowStatus(key) }
                     >
                     <Dropdown.Item eventKey="active"  >Active</Dropdown.Item>
                     <Dropdown.Item eventKey="inactive">Inactive</Dropdown.Item>
                     <Dropdown.Item eventKey="all"     >All</Dropdown.Item>
                  </DropdownButton>
               </Navbar.Text>
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                     <Button size='sm' onClick={props.newEmployee}><PersonPlus /> New</Button>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   )
}

export default EmployeeHeader
