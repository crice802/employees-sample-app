
import React, {  useEffect, useState } from 'react'
import * as apiService from "../../services/apiService"


 
const Employee = () => {
const [employees, setEmployees] = useState()
const [isActive, setIsActive] = useState(false)

useEffect(() => {
  const getEmp = async ()=> {

   await apiService.index()
    .then(employees =>{
      
      console.log("EMP", employees)
      setEmployees(employees.employees)
    } )
  }
  getEmp()
},[])
  

  return <div>
   
      {employees && employees.map((employee) => (
        <div key={employee.id} className='accordian'>
          <div className='accordian-item'>
            <img width="200px" src={employee.avatar} alt={employee.firstName}/>
            <div className='accordian-title'
            onClick={()=> setIsActive(!isActive)}
            >
              {employee.firstName} {employee.lastName}</div>
              <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content">
            <h1>AFTIN!!!!!</h1>
            </div>}
        </div>
      )
      
      )}
    </div>;
  }

export default Employee;