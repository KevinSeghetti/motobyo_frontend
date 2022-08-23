import { useState } from 'react'

import Login from '../components/Login'
import ConfirmationModal from '../components/ConfirmationModal'

import { NetworkLogin } from '../common/network.js'

//===============================================================================

const LoginContainer = (props) => {
   const [userName, setUserName] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState(null)

   console.log("error",error)

   return (
          <div className="login-container">
            <Login
                userName = {userName}
                password = {password}
                setUserName = {setUserName}
                setPassword = {setPassword}
                submit = { () =>
                    {
                        console.log("submit",userName,password)
                        NetworkLogin({userName:userName,password:password},(auth) =>
                        {
                            console.log("login succeeded")
                            props.setAuthentication(auth)
                        }, (error) =>
                        {
                            console.log("login failed")
                            setError(error)
                        }
                        )
                    }
                }
            />
            { error &&
                <ConfirmationModal
                  title = "Login error"
                  body = { error }
                  submit = { () =>
                      {
                          setError(null)
                      }
                  }
                />
            }
      </div>
   )
}

export default LoginContainer

