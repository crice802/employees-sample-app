import { makeServer } from "../../server";
import React, { Component } from 'react';


import EmployeeIndex from '../../pages/EmployeeIndex/EmployeeIndex.jsx'
import Employee from "../../components/Employee/Employee.jsx"
import * as apiService from  "../../services/apiService.js"
import { datatype } from "faker";

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

  render() { 
    return (
      // <>
      // <h1>Employees</h1>
      // <nav>
      //   <Link to="/employees">Employee Index</Link>
      // </nav>
      // <Outlet />
      // </>
     
      <div>
      <header>
        <h1>Employees</h1>
        <Employee
        employee={this.state.employees}
        />
      </header>
    </div>
    );
  }
}
 
export default App;