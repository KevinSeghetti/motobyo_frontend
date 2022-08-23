import './Employee.css'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'

import "react-datepicker/dist/react-datepicker.css"

import DatePicker from "react-datepicker"
import { parseISO } from "date-fns"

const EmployeeEditModal = (props) => {
    // TODO: add field validation, so that user cannot send an invalid
    // entry (for example, empty first name).

   //console.log("EmployeeEditModal",props)

   let fieldsDefinition = [
       {
           "label":"First Name",
           "fieldName" : "firstName",
           "type": "string",
           "placeholder" : "Enter first name here",
       },
       {
           "label":"Middle Initial",
           "fieldName" : "middleInitial",
           "type": "string",
           "maxLength": 1,
           "placeholder" : "Enter middle intial here",

       },
       {
           "label":"Last Name",
           "fieldName" : "lastName",
           "type": "string",
           "placeholder" : "Enter last name here",
       },
       {
           "label":"Date of Birth",
           "fieldName" : "dateOfBirth",
           "type": "date",
       },
       {
           "label":"Date of Employment",
           "fieldName" : "dateOfEmployment",
           "type": "date",
       },
   ]

   let fieldComponents = fieldsDefinition.map( (entry,index) => {

       let inputComponent = null

       switch (entry.type) {
         case 'string':
             inputComponent = <input className="form-control"
                 disabled = { entry.readOnly }
                 type="text"
                 name={index}
                 defaultValue={ entry.fieldName in props.fieldData?props.fieldData[entry.fieldName]:entry.default }
                 placeholder={ entry.placeholder }
                 maxLength={entry.maxLength }
                 autoFocus = { index === 0 }
                 onChange = { (event) => props.setFieldData({...props.fieldData, [entry.fieldName]: event.target.value }) }
             />

           break;
         case 'date':
             inputComponent = <DatePicker
                 selected={parseISO(props.fieldData[entry.fieldName])}
                 onChange= {
                     (date:Date) => {
                         props.setFieldData({...props.fieldData, [entry.fieldName]: date.toISOString() })
                     }
                 }
             />
           break;
         default:
           console.log(`invalid field type ${entry.fieldType}.`);
       }

       return <Row key={index} >
               <Col xs={4} className="fieldLabel" >
                   <label>{entry.label}</label>
               </Col>
               <Col xs={8} className="inputField" >
                { inputComponent }
               </Col>
           </Row>
   } )

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
           { fieldComponents }

               </Modal.Body>
               <Modal.Footer>
                 <Button                             onClick={props.cancelDialog}>Cancel</Button>
                 <Button variant="primary" autoFocus onClick={props.submit}>Ok</Button>
               </Modal.Footer>
           </Modal>
       </div>

   )
}


export default EmployeeEditModal;
