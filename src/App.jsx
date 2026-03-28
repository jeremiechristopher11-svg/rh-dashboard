import { useState } from "react";
import { styles } from "./assets/components/styles";
import EmployeeForm from "./assets/components/EmployeeForm";
import EmployeeList from "./assets/components/EmployeeList";
import initialEmployees from "./assets/data/employee";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAddEmployee = (newEmployee) => {
    const employeeWithId = {
      ...newEmployee,
      id:
        employees.length > 0
          ? Math.max(...employees.map((emp) => emp.id)) + 1
          : 1,
    };
    setEmployees([...employees, employeeWithId]);
  };

  const getTotalCount = () => employees.length;
  const getActiveCount = () =>
    employees.filter((emp) => emp.status === "actif").length;
  const getInactiveCount = () =>
    employees.filter((emp) => emp.status === "inactif").length;

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.headerTitle}>RH Dashboard</h1>
          <p style={styles.headerSub}>
            Département Ressources Humaines - Gestion des profils
          </p>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={styles.counter}>
            <span style={styles.counterNum}>{getTotalCount()}</span>
            <span style={styles.counterLabel}>Total</span>
          </div>
          <div style={styles.counter}>
            <span style={styles.counterNum}>{getActiveCount()}</span>
            <span style={styles.counterLabel}>Actifs</span>
          </div>
          <div style={styles.counter}>
            <span style={styles.counterNum}>{getInactiveCount()}</span>
            <span style={styles.counterLabel}>Inactifs</span>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <EmployeeForm onAdd={handleAddEmployee} />

        <div style={styles.divider}></div>

        <EmployeeList employees={employees} />
      </main>
    </div>
  );
}

export default App;
