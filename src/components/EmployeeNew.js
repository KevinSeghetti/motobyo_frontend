import './Employee.css';



import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';

const EmployeeNewModal = (props) => {

   return (
       <div
           onKeyDown=
               { (event) =>
                   {
                       //(console.log("keydown",event.key))
                       if(event.key === 'Escape')
                       {
                           props.cancelDialog()
                       }
                       if(event.key === 'Enter')
                       {
                           this.handleSubmit(event)
                       }
                   }
               }
           >
           <Modal show={true}>
               <Modal.Header>
                   <Modal.Title>Delete Part</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <Row>
               body text
                   </Row>
               </Modal.Body>
               <Modal.Footer>
                 <Button                             onClick={props.cancelDialog}>Cancel</Button>
                 <Button variant="primary" autoFocus onClick={ (e) => this.handleSubmit(e) }>Ok</Button>
               </Modal.Footer>
           </Modal>
       </div>

   )
}


export default EmployeeNewModal;
