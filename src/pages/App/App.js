import { makeServer } from "../../server";
import Employee from "../../components/Employee/Employee.jsx"

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <div>
      <header>
        <h1>Employees</h1>
        <Employee />
      </header>
    </div>
  );
}

export default App;
