
//===============================================================================

//const baseUrl="http://localhost:3000/"
const baseUrl="/api/"
const employeesUrl=baseUrl+"employees/"
const loginUrl=baseUrl+"login"

//===============================================================================

function handleErrors(response) {
    if (!response.ok) {
        console.log("handleErrors",response.body)
        throw Error(response.statusText)
    }
    return response
}

//-------------------------------------------------------------------------------

export const NetworkLogin = (data,setAuthentication,setError) =>
{
   fetch(loginUrl,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-
   }).then(handleErrors)
      .then((response) => response.text())
      .then((data) => {
         console.log("Login results",data)
         setAuthentication(data)
      })
      .catch((err) => {
         console.log("Login failed",err)
         setError("Invalid username or password")
      })
}

//===============================================================================

export const FetchEmployeeList = (setEmployees) =>
{
   fetch(employeesUrl)
      .then((response) => response.json())
      .then((data) => {
         console.log("FetchEmployeeList:",data)
         setEmployees(data)
      })
      .catch((err) => {
         console.log("FetchEmployeeList failed",err.message)
      })
}

//===============================================================================

export const PostNewEmployee = (data) =>
{
   fetch(employeesUrl,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-
   })
      .then((response) => response.text())
      .then((data) => {
         console.log("PostNewEmployee results",data)
      })
      .catch((err) => {
         console.log("PostNewEmployee failed",err.message)
      })
}

//===============================================================================
// kts edit and new are so close maybe use factor these into a single function?

export const UpdateEmployee = (data) =>
{
   fetch(employeesUrl+'/'+data.id,{
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-
   })
      .then((response) => response.text())
      .then((data) => {
         console.log("PostNewEmployee results",data)
      })
      .catch((err) => {
         console.log("PostNewEmployee failed",err.message)
      })
}


//===============================================================================

export const DeleteEmployee = (data) =>
{
   fetch(employeesUrl+data.id,{
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   })
      .then((response) => response.text())
      .then((data) => {
         console.log("DeleteEmployee results",data)
      })
      .catch((err) => {
         console.log("DeleteEmployee failed",err.message)
      })
}

//===============================================================================

