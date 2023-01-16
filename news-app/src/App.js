import React, { useState } from 'react';
import './App.css';




function App() {
    const[lastName,setLastName]=useState("");
    const [name,setName]=useState("");
    const [fullName,setFullName]=useState("");
    const [lastnameNew,setlastnameNew]=useState("");

    const inpEvent =(e)=>{
        setName(e.target.value);
    }
    const inpEventtwo =(e)=>{
        setLastName(e.target.value);

    }
    const onSubmit =(e)=>{
    e.preventDefault();
        setFullName(name);
        setlastnameNew(lastName);
    }

   return(
    <div className='main_div'>
        <form onSubmit={onSubmit}>
        <div>
        <h1>Hello {fullName} {lastnameNew}</h1>
        <input className="input-group-text" id="inputGroup-sizing-default"
        type="text" onChange={inpEvent} value={name}  placeholder="Enter Your Name"></input>
        <br/>
        <input className="input-group-text" id="inputGroup-sizing-default"
        type="text"  onChange={inpEventtwo} value={lastName}  placeholder="Enter Your lastname"></input>
        <br/>
        <button type="submit" className='btn btn-primary'>Click me</button>
    </div>
        </form>
    </div>

   );
}

export default App;