
import EmployeeHeader from '../components/EmployeeHeader'
import EmployeeListContainer from './EmployeeListContainer'
import EmployeeNewContainer from './EmployeeNewContainer'

import React, { useState, useEffect } from 'react';

const EmployeeContainer = (props) => {
   const [showNewDialog, setShowNewDialog] = useState(false);

   return (
          <div className="employees-container">

            <EmployeeHeader newEmployee={(event) => setShowNewDialog(true) } />
            <EmployeeListContainer />
            { showNewDialog === true &&
                <EmployeeNewContainer
                  cancelDialog = { () => setShowNewDialog(false) }
                  newEmployee = { props.newEmployee }
                 />
            }

      </div>
   );
};


export default EmployeeContainer;

