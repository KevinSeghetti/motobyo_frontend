import './Employee.css'

import Button from 'react-bootstrap/Button'

const Login = (props) => {

   return (
       <div
           onKeyDown=
               { (event) =>
                   {
                       if(event.key === 'Enter')
                       {
                           props.submit()
                       }
                   }
               }
           >

              <input className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter username here"
                  defaultValue={props.userName}
                  maxLength={100}
                  onChange = { (event) => props.setUserName(event.target.value )}
              />
              <input className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password here"
                  defaultValue={props.password}
                  maxLength={100}
                  onChange = { (event) => props.setPassword(event.target.value )}
              />
              <Button variant="primary" autoFocus onClick={props.submit}>Ok</Button>

       </div>


   )
}


export default Login
