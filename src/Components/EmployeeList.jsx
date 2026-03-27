import EmployeeCard from "./EmployeeCard";

function EmployeeList({employees}){
return(<>
<div>
{employees.map((emp,index)=>(<EmployeeCard
key={index}
name={emp.name}
position={emp.position}
department={emp.department}
status={emp.status}
/>))}
</div>
</>

);

}

export default EmployeeList;