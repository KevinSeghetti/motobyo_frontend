import { useEffect } from 'react'

import {
  Navigate,
} from "react-router-dom"

//===============================================================================

const LogoutContainer = (props) => {
    useEffect(() => {
        props.clearAuthentication()
    }, [props])                         // not actually dependent on any props, but eslint thinks I might be
   return <Navigate to="/login" />
}

export default LogoutContainer

