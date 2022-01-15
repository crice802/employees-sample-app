import React, { Component } from 'react'
import * as apiService from "../../services/apiService"

class Employee extends Component {
  state = {
    employees: [],
  }
async componentDidMount() {
  const data = await apiService.search(this.state)
  this.setState({ employees: data.employees })
}

  render() { 
    return <div>
      <h1>Sanity Test</h1>
    </div>;
  }
}
 
export default Employee;