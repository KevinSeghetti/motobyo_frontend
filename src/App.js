import logo from './assets/Motobyo-Logo-1.png'
import './App.css'

import EmployeeContainer from './containers/EmployeeContainer'
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

//import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'

import './App.css'

const Header = () => (
   <div>
                      <img src={logo} className="App-logo" alt="logo" />
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
