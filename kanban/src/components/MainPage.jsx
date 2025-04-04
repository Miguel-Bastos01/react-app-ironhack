import { Link } from 'react-router-dom';
import { useState } from "react";
import { TaskList } from "./TaskList";
import { Modal } from './Modal';
import { AddACard } from './AddACard';

export function MainPage({showForm, setShowForm, addTask, taskName, setTaskName, taskDescription, setTaskDescription, deadline, setDeadline, priority, setPriority, status, setStatus, setCards, deleteItem, cards }) {

    return (
        <>
        <div className="MainPage">
            <div className="toDoColumn column">
                <TaskList type="To Do" deleteItem={deleteItem} myCards={cards} />
            </div>
            <div></div>
            <div className="inProgColumn column">
                <TaskList type="In Progress" deleteItem={deleteItem} myCards={cards} />
            </div>
            <div></div>
            <div className="doneColumn column">
                <TaskList type="Done" deleteItem={deleteItem} myCards={cards} />
            </div>
           
        </div>
            {/* <AddACard setCards={setCards} cards={cards} /> */}
            <Modal addTask={addTask} showForm={showForm} setShowForm={setShowForm} setCards={setCards} cards={cards} taskName={taskName} setTaskName={setTaskName} taskDescription={setTaskDescription} deadline={deadline} setDeadline={setDeadline} priority={priority} setPriority={setPriority} status={status} setStatus={setStatus}/>
        </>
        
    )


}