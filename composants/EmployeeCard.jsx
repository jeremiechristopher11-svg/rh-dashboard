function EmployeeCard({ employee }) {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      <p>{employee.department}</p>
      <p>{employee.status}</p>
    </div>
  );
}

export default EmployeeCard;
