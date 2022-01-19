
import React, { useState } from 'react'
import EmployeeCard from '../../components/Employee/EmployeeCard'

function EmployeeIndex({employees, handleDeleteEmployee}) {
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
      />
      )}
    </>
  )
}

export default EmployeeIndex
 