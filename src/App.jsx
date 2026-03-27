import { useState } from "react";
import EmployeeForm from "./composants/EmployeeForm";
import EmployeeList from "./composants/EmployeeList";
import employees from "./data/employees";

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <h1>Liste des employés</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
