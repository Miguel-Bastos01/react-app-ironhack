import React from "react"
import {v4 as uuidv4} from "uuid";
import { useState } from "react";

export const Modal = ({addTask}) => {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [deadline, setDeadline] = useState(2025)
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title: taskName,
            description: taskDescription,
            priority: priority,
            deadline: deadline,
            status: status,
            id: uuidv4()
      
          } 
          addTask(newTask)
          setShowForm(!showForm)
    }


    return (
        <>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide form" : "Show form"}</button>
            {showForm && <form onSubmit={handleSubmit} className="modal-container">
                <div className="modal">
                    <span className="modal-header">Add Task</span>
                    <div className="modal-content">
                        <div className="modal-text">
                            <label>
                                Task Name
                                <input name="taskName" type="text" placeholder="Task Name" value={taskName} onChange={(e) => { setTaskName(e.target.value) }} />
                            </label>

                            <label>
                                Task Description  
                                <input name="taskDescription" type="text" placeholder="Task Description" value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} />
                            </label>
                            
                        </div>
                        <div>
                            <label>
                                Deadline
                                <input
                                    name="deadline"
                                    type="date"
                                    placeholder="Deadline"
                                    value={deadline}
                                    onChange={(e) => { setDeadline(e.target.value) }}
                                />
                            </label>

                            <label>
                                Priority
                                <select name="priority" value={priority} onChange={(e) => { setPriority(e.target.value) }}>
                                    <option value="">-- None --</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </label>

                            <label>
                                Status
                                <select name="status" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                    <option value="">-- None --</option>
                                    <option value="To Do">To do</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-submit" type="submit">Add Task</button>
                        <button className="btn btn-cancel" type="button" onClick={() => setShowForm(!showForm)}>Cancel</button>
                    </div>
                </div>
            </form>}
        </>
    )
}