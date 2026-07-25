import React, {  useState } from 'react'
import './todo.css'

const Todolist = () => {
    const [ tasks,setTasks]=useState([]);
    const [newtask,setNewtask]=useState("");
    function handleInputChange(e){
        setNewtask(e.target.value)


    }
    function addTask(){
        setTasks([...tasks,newtask]);
        setNewtask("");

    }
    function deleteTask(index){
        setTasks(tasks.filter((tasks,i)=>i!=index))

    }
    function moveUp(index){
        let copy=[...tasks];
        let temp=copy[index-1];
        copy[index-1]=copy[index];
        copy[index]=temp;
        setTasks(copy)

    }
    function moveDown(index){
        let copy=[...tasks];
        let temp=copy[index+1];
        copy[index+1]=copy[index];
        copy[index]=temp;
        setTasks(copy)

    }

    


  return (
    <div className='todo-list'>
    <h1>To-Do List</h1>
    <div>
        <input type="text" 
        placeholder='enter task'
        value={newtask}
        onChange={handleInputChange}/>
        <button className='add-btn' onClick={addTask}>Add</button>
        
    </div>
    <ol>{
            tasks.map((task,index)=>
                <li key={index}>
                    <span>{task}</span>
                    <button
                    className='del-btn'
                    onClick={()=>deleteTask(index)}>Delete</button>
                    <button 
                    className='mov-btn'
                    onClick={()=>moveUp(index)}>
                        move up
                    </button>
                    <button 
                    className='mov-btn'
                    onClick={()=>moveDown(index)}>
                        move Down</button>

                </li>
            )}
        </ol>
    </div>
  )
}

export default Todolist