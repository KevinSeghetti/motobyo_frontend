
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'

import "react-datepicker/dist/react-datepicker.css"

import DatePicker from "react-datepicker"

const ConfirmationModal = (props) => {

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
                           props.submit()
                       }
                   }
               }
           >
           <Modal show={true}>
               <Modal.Header>
                   <Modal.Title>{props.title}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   { props.body }
               </Modal.Body>
               <Modal.Footer>
                 <Button                             onClick={props.cancelDialog}>Cancel</Button>
                 <Button variant="primary" autoFocus onClick={props.submit}>Ok</Button>
               </Modal.Footer>
           </Modal>
       </div>

   )
}


export default ConfirmationModal;
