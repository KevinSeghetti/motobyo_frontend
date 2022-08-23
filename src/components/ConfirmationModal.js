
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ConfirmationModal = (props) => {

   return (
       <div
           onKeyDown=
               { (event) =>
                   {
                       //(console.log("keydown",event.key))
                       if(event.key === 'Escape')
                       {
                           if('cancelDialog' in props)
                           {
                               props.cancelDialog()
                           }
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
               { 'cancelDialog' in props &&
                   <Button                             onClick={props.cancelDialog}>Cancel</Button>
               }
                 <Button variant="primary" autoFocus onClick={props.submit}>Ok</Button>
               </Modal.Footer>
           </Modal>
       </div>
   )
}

export default ConfirmationModal;
