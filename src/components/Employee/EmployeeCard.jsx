import React, { useState } from 'react'


function EmployeeCard({employee, handleDeleteEmployee, isActive1, setIsActive1 }) {
  const [isActive2, setIsActive2] = useState(false)

  return (
  <div>
        <div key={employee?.id} className='accordian'>
          <div className='accordian-item'>
            <div className='accordian-title'
            onClick={()=> setIsActive2(!isActive2)}
            >
            <img width="200px" src={employee?.avatar} alt={employee?.firstName}/>
              {employee?.firstName} {employee?.lastName}</div>
              <div>{(isActive1 ||isActive2 ) ? '-' : '+'}</div>
          </div>
          {(isActive2 ||isActive1)  && <div className="accordion-content">
            <div> <strong>Bio:</strong> <em>{employee.bio}</em></div>
            <div> <strong>Email:</strong> {employee.email}</div>
            <div> <strong>Cell:</strong> {employee.phone}</div>
            <div> <strong>Address:</strong> {employee.address.streetAddress} </div>
            <div> <strong>City, State, Zip:</strong> {employee.address.city} {employee.address.state} {employee.address.zipCode}</div>
            </div>}
            <button
             onClick={()=> handleDeleteEmployee(employee.id)}
             >Delete Employee</button>
    </div>;
    </div>
    
    
      )
}

export default EmployeeCard

