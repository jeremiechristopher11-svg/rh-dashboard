import { useState } from "react";
function EmployeeForm({addEmployee}){
    const[name,setName]= useState("");
    const[position,setPosition]= useState("");
    const[department,setDepartment]= useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        addEmployee({
            name,
            position,
            department,
            status:"Actif"

        }
        );
        setName("")
        setPosition("")
        setDepartment("");

    }

    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom"   
        
        value={name}
        onChange={(e)=> setName(e.target.value)}
        required/>

        <input type="text" placeholder="Position"
        value={position}
        onChange={(e) =>setPosition(e.target.value)}
        required/>

        <input type="text" placeholder="Department" value={department}
        onChange={(e)=>setDepartment(e.target.value)} required/>

        <button type="submit">Add+ </button>
        </form>
    );

    }

