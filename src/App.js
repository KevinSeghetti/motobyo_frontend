import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react'

import logo from './assets/Motobyo-Logo-1.png'
import './App.css'

import LoginContainer from './containers/LoginContainer'
import LogoutContainer from './containers/LogoutContainer'
import EmployeeContainer from './containers/EmployeeContainer'
import AboutContainer from './containers/AboutContainer'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

//===============================================================================

const Header = (props) => (
   <div>
      <img src={logo} className="App-logo" alt="logo" style={{ "width":"100%","aspectRatio":"1/1"}} />
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Coding Challenge</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                { !props.isUserAuthenticated &&
                  <><LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer></>
                }
                { props.isUserAuthenticated &&
                  <><LinkContainer to="/logout"><Nav.Link>Logout</Nav.Link></LinkContainer></>
                }
                { props.isUserAuthenticated &&
                    <>
                      <LinkContainer to="/employees"><Nav.Link>Employees</Nav.Link></LinkContainer>
                      <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    </>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
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
                            console.log("App:auth",auth)
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
