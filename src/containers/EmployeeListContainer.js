
import EmployeeList from '../components/EmployeeList'
import React, { useState, useEffect } from 'react'
import { FetchEmployeeList } from '../common/network.js'

const EmployeeListContainer = (props) => {
   //console.log("EmployeeListContainer",props)
   const [employees, setEmployees] = useState([])

   useEffect(() => {
      FetchEmployeeList(setEmployees)
   }, [props.redrawListCounter])

   //console.log("EmployeeListContainer:results",employees)

   return (
       <EmployeeList
            showStatus     = { props.showStatus }
            employees      = { employees }
            viewEmployee   = { props.viewEmployee }
            editEmployee   = { props.editEmployee }
            deleteEmployee = { props.deleteEmployee }
       />
   )
}

export default EmployeeListContainer

