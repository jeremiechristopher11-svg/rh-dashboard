import { useState } from 'react'
import './App.css'
import EmployeeForm from"./Components/EmployeeForm";
import EmployeeList from"./Components/EmployeeList";
import EmployeeCard from './Components/EmployeeCard';
function App() {
  const [employees,setEmployees]= useState([
    {name:"Jen",position:"Dev",department:"It",status:"Actif"},
    {name:"Bob",position:"RH",department:"HR",status:"Actif"}
  ]);
  console.log(employees)
  function addEmployee(newEmp){
    setEmployees([...employees, newEmp]);
  }
  return(<>
  <div>

    <h1>hello </h1>
  <EmployeeForm addEmployee={addEmployee}/>
  <EmployeeList employees={employees}/>
  <EmployeeCard/>
</div>
    </>
  )
}

export default App
