import { styles } from "./styles";

function EmployeeCard({ employee }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getStatusColor = (status) => {
    return status === "actif" ? "#10b981" : "#ef4444";
  };

  const getDepartmentColor = (department) => {
    const colors = {
      Tech: "#3b82f6",
      Produit: "#8b5cf6",
      RH: "#f59e0b",
      Finance: "#10b981",
      Marketing: "#ec4899",
    };
    return colors[department] || "#64748b";
  };

  return (
    <div style={styles.card}>
      <div style={styles.avatar}>{getInitials(employee.name)}</div>
      <div style={styles.cardBody}>
        <h3 style={styles.empName}>{employee.name}</h3>
        <p style={styles.empPosition}>{employee.position}</p>
        <div style={styles.badgeRow}>
          <span
            style={{
              ...styles.badge,
              background: getDepartmentColor(employee.department) + "20",
              color: getDepartmentColor(employee.department),
            }}
          >
            {employee.department}
          </span>
          <span
            style={{
              ...styles.badge,
              background: getStatusColor(employee.status) + "20",
              color: getStatusColor(employee.status),
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: getStatusColor(employee.status),
              }}
            ></span>
            {employee.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
