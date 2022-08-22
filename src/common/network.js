
//===============================================================================

const baseUrl="http://localhost:3000/"

//===============================================================================

export const FetchEmployeeList = (setEmployees) =>
{
   fetch(baseUrl+'/employees')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setEmployees(data);
      })
      .catch((err) => {
         console.log(err.message);
      });
}

//===============================================================================

export const PostNewEmployee = (data) =>
{
   fetch(baseUrl+'/employees',{
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
         console.log(data);
      })
      .catch((err) => {
         console.log(err.message);
      });
}

//===============================================================================

