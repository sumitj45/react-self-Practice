import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [inpData,setInputData]=useState("");
  const [items,setItems]=useState([]);

  const inpEvent =(e)=>{
    setInputData(e.target.value);
  }
  const inpListItem =(e)=>{
    setItems((oldItems)=>{
      return [...oldItems,inpData];
    })
    setInputData(" ");
  }
  const deleteItem =(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
      return index!==id;      })
    })

  }
return(
    <div className='main_div'>
      <div  className='div_center'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder='Add a Item'   value={inpData}  onChange={inpEvent} />
        <button className='btn btn-primary' onClick={inpListItem}>+</button>
        <ol>
            {/* <li>{inpData}</li>
             */}
             {items.map((itemVal,index) =>{
              console.log(itemVal)
              return <TodoList key={index} id={index} text={itemVal} onSelect={deleteItem}/>

             })}
        </ol>
      </div>
    </div>
);

}

export default App;