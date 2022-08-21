import logo from './assets/Motobyo-Logo-1.png'
import './App.css'

import EmployeeListContainer from './containers/EmployeeListContainer'
import EmployeeNewContainer from './containers/EmployeeNewContainer'
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

//import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};



const Header = () => (
   <div>
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1 className="header">Welcome To Employee editing</h1>
    </div>
)

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <Header />
      <ExampleToast />
      <EmployeeListContainer />
      <EmployeeNewContainer />


    </Container>
  </Container>
)




function NotApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
