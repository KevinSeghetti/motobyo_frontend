import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom"

import logo from './assets/Motobyo-Logo-1.png'
import './App.css'

import LoginContainer from './containers/LoginContainer'
import EmployeeContainer from './containers/EmployeeContainer'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

let isUserAuthenticated=false

const Header = (props) => (
   <div>
      <img src={logo} className="App-logo" alt="logo" style={{ "width":"100%","aspectRatio":"1/1"}} />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link>
      { props.isUserAuthenticated &&
          <>
            <Link to="/employees">Employees</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
          </>
      }
      </nav>
   </div>
)

const App = () => (
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
            <Route path="login" element={<LoginContainer />} />
            <Route path="employees" element={
                isUserAuthenticated ?
                <EmployeeContainer /> :
                <Navigate to="/login" replace />
            } />
          </Routes>

    </Container>
  </Container>
)

export default App
