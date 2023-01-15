import React ,{useState} from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

//static
// const contacts =[
//   {
//     id:"1",
//     name:"sumit",
//     email:"sumit@gmail.com"
//   },
//   {
//     id:"2",
//     name:"Amrii",
//     email:"Amrii@gmail.com"
//   }


function App() {
  //declare the hook
  // const state=useState();
// implementing the hook on the target area

 
 const  incFunc =()=>{
  // updating the num using setCount
   let newCTime =new Date().toLocaleTimeString();
  setCtime(newCTime)

  }
  setInterval(incFunc,1000);
  let newTime =new Date().toLocaleTimeString();
  const[cTime,setCtime]=useState(newTime);

  return (
    <div className="app">
<h1>{cTime}</h1>
{/* <button className="btn btn-primary" onClick={incFunc}>Click</button> */}


{/*      
       <AddContact/> 
    <h3>ContactList</h3>
       <ContactList contacts={contacts}/> */}

    </div>
  );
}

export default App;
