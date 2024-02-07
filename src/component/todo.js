import './styles/todo.css';
import { useState , useRef, useEffect } from 'react';
import axios from 'axios';
import {FaTrash  } from 'react-icons/fa'
import { GrCheckboxSelected } from 'react-icons/gr'
function Menu(){



  const[todos, setTodos] = useState([]);
  const inputRef = useRef();

  const [activity, setActivity] = useState('');
  
function addingTask(){
  const task = inputRef.current.value;
  const newItem = { done: false , task};
  
  setTodos([...todos, newItem]);
  inputRef.current.value = "";
  
}
const taskdone =(index) =>{
    // doneRef.current.classList.add('done');
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    
}
const deleteTask=(index)=>{
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
  
}




 function get()  {
    
    axios.get('https://www.boredapi.com/api/activity/')
      .then((response) => {
        setActivity(response.data.activity);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  };
    return (
      <div className='menu'>
         <h1 className='to-head'>Daily To-Do List</h1>
         <div className='rearrangee'>
         <div className='for-gridd'>

      <div className='sprt-one '>
      <h2>TO-DO</h2>
        <div className='sprot'>
       <input ref={inputRef} placeholder='enter your task'/>
       <button className='add-task-btn'  onClick={addingTask}>Add Task</button>
        </div>
     
       <ul>
        {todos.map(({task , done}, index )=>{
          return <div className='list-inn'><li key={index} className={ done? "done" : ""} >{task} </li ><div><FaTrash className='lasty' onClick={()=>deleteTask(index)} /> <GrCheckboxSelected className='lasty' onClick={()=>taskdone(index)}/></div></div>
        })}
      </ul>
    

      </div>








      <div className='sprt-one sqrt'>
        <h2>Boring? Get Task To Do</h2>
      <p>{activity}</p>
        
        <button className='get-task-btn' onClick={get}>Get Task</button>
      </div>
      </div>
      
      </div>
      </div>
    );
    };
  

  export default Menu;