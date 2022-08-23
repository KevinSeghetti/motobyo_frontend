import { useState } from 'react'

import Login from '../components/Login'

//===============================================================================

const LoginContainer = (props) => {
   const [userName, setUserName] = useState("")
   const [password, setPassword] = useState("")

   return (
          <div className="login-container">
            <Login
                userName = {userName}
                password = {password}
                setUserName = {setUserName}
                setPassword = {setPassword}
            />
      </div>
   )
}

export default LoginContainer

