import React, {  useState } from 'react'
import './todo.css'

const Todolist = () => {
    const [ tasks,setTasks]=useState([]);
    const [newtask,setNewtask]=useState("");
    function handleInputChange(e){
        setNewtask(e.target.value)


    }
    function addTask(){
        if(newtask.trim()!==""){
        setTasks([...tasks,{text:newtask,completed:false},]);
        setNewtask("");}

    }
    function deleteTask(index){
        setTasks(tasks.filter((tasks,i)=>i!=index))

    }
    function moveUp(index){
        if(index===0)return;
        let copy=[...tasks];
        let temp=copy[index-1];
        copy[index-1]=copy[index];
        copy[index]=temp;
        setTasks(copy)

    }
    function moveDown(index){
        
        let copy=[...tasks];
        if(index===copy.length-1)return;
        let temp=copy[index+1];
        copy[index+1]=copy[index];
        copy[index]=temp;
        setTasks(copy)

    }
    function strike(index){
        let copy=[...tasks];

        copy[index].completed=copy[index].completed?false:true;
        setTasks(copy);

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
                    <input type="checkbox" value={task.completed} name="check" id="check" onClick={()=>strike(index)} />


                    <span style={{textDecoration:task.completed?"line-through":"none"}}>{task.text}</span>
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