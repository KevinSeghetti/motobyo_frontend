import logo from './assets/Motobyo-Logo-1.png'
import './App.css'

import EmployeeContainer from './containers/EmployeeContainer'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'


const Header = () => (
   <div>
                      <img src={logo} className="App-logo" alt="logo" style={{ "width":"100%","aspectRatio":"1/1"}} />
    </div>
)

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <Header />
      <EmployeeContainer />
    </Container>
  </Container>
)

export default App
