import React, { useState } from 'react';
import './App.css';

function App() {

    const [fullName,setFullName]=useState({
        fname:"",
        lname:"",
        email:"",
        number:"",
    });


    const inpEvent =(e)=>{

        const{value,name}=e.target

        setFullName((preValue)=>{
            if(name==='fName'){
         return{
            fname:value,
            lname:preValue.lname,
            email:preValue.email,
            number:preValue.number
         };
            }else if(name==='lName'){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                    number:preValue.number
                 };

            }else if(name==='Email'){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    number:preValue.number,
                 };

            }else if(name==='Number'){
                return{
                    fname:preValue.fname,
                    lname:preValue.value,
                    email:preValue.email,
                    number:value,
                 };
            }
        })

    }

    const onSubmit =(e)=>{
       e.preventDefault();
       alert("form is Submitted");

    }

   return(
    <div className='main_div'>
        <form onSubmit={onSubmit}>
        <div>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <h4>{fullName.email}</h4>
        <h5>{fullName.number}</h5>
        <input className="input-group-text" id="inputGroup-sizing-default"
        type="text" onChange={inpEvent} name="fName" value={fullName.fname}  placeholder="Enter Your Name"></input>
        <br/>
        <input className="input-group-text" id="inputGroup-sizing-default"
        type="text"  onChange={inpEvent} name="lName" value={fullName.lname}  placeholder="Enter Your lastname"></input>
        <br/>
        <input className="input-group-text" id="inputGroup-sizing-default"
        type="email"  onChange={inpEvent} name="Email" value={fullName.email}  placeholder="Enter Your Email"></input>
        <br/>
        <input className="input-group-text" id="inputGroup-sizing-default"
        type="number"  onChange={inpEvent} name="Number" value={fullName.number}  placeholder="Enter Your Phone number"></input>
        <br/>
        <button type="submit" className='btn btn-primary'>Click me</button>
    </div>
        </form>
    </div>

   );
}

export default App;