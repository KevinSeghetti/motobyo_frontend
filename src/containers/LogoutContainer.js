import {
  Navigate,
} from "react-router-dom"

//===============================================================================

const LogoutContainer = (props) => {
    props.clearAuthentication()
   return <Navigate to="/login" />
}

export default LogoutContainer

