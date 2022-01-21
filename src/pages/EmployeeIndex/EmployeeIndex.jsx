
import React, { useState } from 'react'
import EditEmployee from '../../components/EditEmployee/EditEmployee'
import EmployeeCard from '../../components/Employee/EmployeeCard'

function EmployeeIndex({employees, handleDeleteEmployee, handleUpdateEmployee}) {
  const [isActive1, setIsActive1] = useState(false)
  
  return (
    
    <>
    <button
     onClick={()=> setIsActive1(!isActive1)}
    >Show All</button>
    {employees.map(employee => 
      <EmployeeCard
      isActive1={isActive1}
      setIsActive1={setIsActive1}
      key={employee.id}
      employee={employee}
      handleDeleteEmployee={handleDeleteEmployee}
      />,
        //Component to update for bonus (running short on time for this but wanted to add what i could)
      // <EditEmployee 
      // handleUpdateEmployee={handleUpdateEmployee}
      // employee={employee}
      // />
      )}
    </>
  )
}

export default EmployeeIndex
 