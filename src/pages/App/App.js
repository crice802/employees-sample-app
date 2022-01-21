import { makeServer } from "../../server";
import React, { Component } from 'react';
import EmployeeIndex from '../../pages/EmployeeIndex/EmployeeIndex.jsx'
import * as apiService from  "../../services/apiService.js"


if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

class App extends Component {
  state = { 
    employees: [],
   } 

  async componentDidMount() {
    const data = await apiService.index(this.state)
    this.setState({ employees: data.employees })
  }

  handleDeleteEmployee = async (id) => {
    await apiService.deleteEmp(id)
    this.setState((state) => ({
      employees: state.employees.filter((emp) => emp.id !== id)
    }))
  }

  //function to update for bonus (running short on time for this but wanted to add what i could)
  // handleUpdateEmployee = async updatedEmpData => {
  //   const updatedEmployee = await apiService.update(updatedEmpData)
  //   const newEmployeesArray = this.state.employees.map(emp =>
  //     emp.id === updatedEmployee.id ? updatedEmployee :  emp
  //     )
  //     this.setState(
  //       {employees: newEmployeesArray},
  //       () => this.props.history.push('/')
  //     )
  // }

  render() { 
    return (
      <div>
      <header>
        <h1>Employees</h1>
        <EmployeeIndex
        handleUpdateEmployee={this.handleUpdateEmployee}
        handleDeleteEmployee={this.handleDeleteEmployee}
        employees={this.state.employees}
        />
      </header>
    </div>
    );
  }
}
 
export default App;