
import React, {  useEffect, useState } from 'react'
import * as apiService from "../../services/apiService"


 
const Employee = ({employees}) => {
// const [employees, setEmployees] = useState()
const [isActive, setIsActive] = useState()


  return <div>
   
      {employees && employees.map((employee) => (
        <div key={employee.id} className='accordian'>
          <div className='accordian-item'>
            <div className='accordian-title'
            onClick={()=> setIsActive(!isActive)}
            >
            <img width="200px" src={employee.avatar} alt={employee.firstName}/>
              {employee.firstName} {employee.lastName}</div>
              <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive  && <div className="accordion-content">
            <div>Bio: {employee.bio}</div>
            <div>{employee.address.city}</div>
            <div>{employee.address.streetAddress}  {employee.address.zipCode} {employee.address.state}</div>
            </div>}
        </div>
      )
      
      )}
    </div>;
  }

export default Employee;