'use client'

import React, { useState } from 'react'

const Todos = () => {
    const [tasks, setTasks] = useState(["Take a shower", "eat", "sleep"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(e.target.value);
    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    interface DeleteTaskFn {
        (index: number): void;
    }

    const deleteTask: DeleteTaskFn = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    interface MoveTaskUpFn {
        (index: number): void;
    }

    const moveTaskUp: MoveTaskUpFn = (index) => {

        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    interface MoveTaskDownFn {
        (index: number): void;
    }

    const moveTaskDown: MoveTaskDownFn = (index) => {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
  return (
    <div className='mt-5 w-full justify-center'>
        <section className='w-xl m-auto'>
            <nav className=' w-xl *:p-1 *:m-2'>
                <input className='border' type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange} />
                <button className='border cursor-pointer' onClick={() => addTask()}>Add task</button>
            </nav>
            
        
            <ul>
                {tasks.map((task, index) => (
                        <li className='w-full flex justify-between border-2 rounded-2xl *:m-2 m-1 ' key={index}>
                            <span className='flex-1' >{task}</span>
                            <button className='border cursor-pointer p-1' onClick={() => deleteTask(index)}>Delete</button>
                            <button className='border cursor-pointer p-1' onClick={() => moveTaskUp(index)}>Move up</button>
                            <button className='border cursor-pointer p-1' onClick={() => moveTaskDown(index)}>Move down</button>
                        </li>
                    ))}
                
            </ul>
        </section>
    </div>
  )
}

export default Todos
