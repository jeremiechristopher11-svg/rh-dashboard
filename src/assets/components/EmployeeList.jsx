import { styles } from "./styles";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  if (employees.length === 0) {
    return (
      <div style={styles.emptyMsg}>
        <p>Aucun employé à afficher</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={styles.sectionTitle}>
        Équipe actuelle{" "}
        <span style={styles.countBadge}>{employees.length}</span>
      </h2>
      <div style={styles.grid}>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
