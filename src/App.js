import {
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom"

import { useState } from 'react'

import logo from './assets/Motobyo-Logo-1.png'
import './App.css'

import LoginContainer from './containers/LoginContainer'
import LogoutContainer from './containers/LogoutContainer'
import EmployeeContainer from './containers/EmployeeContainer'
import AboutContainer from './containers/AboutContainer'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'

//===============================================================================

const Header = (props) => (
   <div>
      <img src={logo} className="App-logo" alt="logo" style={{ "width":"100%","aspectRatio":"1/1"}} />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      { !props.isUserAuthenticated &&
        <><Link to="/login">Login</Link>|{" "}</>
      }
      { props.isUserAuthenticated &&
        <><Link to="/logout">Logout</Link>|{" "}</>
      }
      { props.isUserAuthenticated &&
          <>
            <Link to="/employees">Employees</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
          </>
      }
      </nav>
   </div>
)

const App = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Header
            isUserAuthenticated={isUserAuthenticated}
        />
            <Routes>
              <Route
                  path="*"
                  element={
                      isUserAuthenticated ?
                      <Navigate to="/employees" replace /> :
                      <Navigate to="/login" replace />
                  }
              />
              <Route path="login"
                  element = {
                      <LoginContainer
                        isUserAuthenticated = { isUserAuthenticated }
                        setAuthentication = { (auth) => {
                            console.log("auth",auth)
                            if(auth === 'success')
                            {
                                setIsUserAuthenticated(true)
                            }
                            else
                            {
                                setIsUserAuthenticated(false)
                            }
                          }
                      }
                      />
                  }
              />
              <Route path="logout"
                  element = {
                      <LogoutContainer
                        clearAuthentication = { () => {
                            setIsUserAuthenticated(false)
                          }
                      }
                      />
                  }
              />

              <Route path="employees" element={
                  isUserAuthenticated ?
                  <EmployeeContainer /> :
                  <Navigate to="/login" replace />
              } />
              <Route path="about" element={
                  isUserAuthenticated ?
                  <AboutContainer /> :
                  <Navigate to="/login" replace />
              } />

            </Routes>

      </Container>
    </Container>
  )
}

export default App
