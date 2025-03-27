import { useState } from "react";
import {v4 as uuidv4} from "uuid"

export function AddACard({setCards, cards}) { 
const [showForm, setShowForm] = useState(false)
const [title, setTitle] = useState("");
const [priority, setPriority] = useState("Low");
const [deadline, setDeadline] = useState("");
const [status, setStatus] = useState("To Do");


      const addTask = (e) => {
    e.preventDefault();
    const tasksCopy = structuredClone(cards);
    tasksCopy.push({
      title: title,
      priority: priority,
    deadline: deadline,
      status: status,
      id: uuidv4()

    });
    setCards(tasksCopy);
  }

    return (
        <div className="CardForm">
            <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Hide form" : "Show form"}</button>
            {showForm && <form onSubmit={addTask}>
                <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
                <select name="priority" value={priority} onChange={(e) => {setPriority(e.target.value)}} required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select name="status" value={status} onChange={(e) => {setStatus(e.target.value)}} required>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <input type="date" name="deadline" value={deadline} onChange={(e) => {setDeadline(e.target.value)}} />
                <button type="submit">Add Task</button>
            </form>}
        </div>
    )
}
