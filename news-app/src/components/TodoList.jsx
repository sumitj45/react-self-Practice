
import React from 'react'

export default function TodoList(props) {
  // console.log(props.text)
  const deleteItem =()=>{
    console.log("deleted")

  }
  return (
    <>
<div className='todo_style'>
<i  onCick={deleteItem}
 className='fa fa-times-circle' aria-hidden="true" onClick={()=>{
  props.onSelect(props.id)}}/>

        <li>{props.text}</li>
</div>

    </>
  );
}
