
import React, { useState } from 'react'
import EmployeeCard from '../../components/Employee/EmployeeCard'

function EmployeeIndex({employees, handleDeleteEmployee}) {
  const [isActive, setIsActive] = useState(false)
  
  return (
    
    <>
    <button
     onClick={()=> setIsActive(!isActive)}
    >Show All</button>
    {employees.map(employee => 
      <EmployeeCard
      // isActive={isActive}
      // setIsActive={setIsActive}
      key={employee.id}
      employee={employee}
      handleDeleteEmployee={handleDeleteEmployee}
      />
      )}
    </>
  )
}

export default EmployeeIndex
 