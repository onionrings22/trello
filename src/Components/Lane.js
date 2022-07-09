import './Lane.css'
import Task from './Task';
import React, { useState } from 'react'

function Lane(props) {
    const name = props.name
    const title = props.title
    const color = props.color
    const tasks = props.tasks
    const move = props.move
    const next = props.next
    const prev = props.prev

    const [newTask, setNewTask] = useState('')

    function handleChange(event) {
      setNewTask(event.target.value)
    }

    function addTask() {
      tasks.push(newTask)
      setNewTask('')
    }

    const taskList = tasks.map((task, index) =>
        <Task key={index} srcLane={name} index={index} move={move} text={task} next={next} prev={prev}></Task>
    )
    return (
      <div className={`Lane ${color}`}>
        <h1>{title}</h1>
        <div>
            <input type="text" value={newTask} onChange={handleChange}></input>
            <button type="button" onClick={addTask}>Add Task</button>
        </div>
        <div id="task-container">
            {taskList}
        </div>
      </div>
    );
  }
  
  export default Lane;