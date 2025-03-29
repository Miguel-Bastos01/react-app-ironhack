import { Link } from 'react-router-dom';
import { useState } from "react";
import { TaskList } from "./TaskList";
import { Modal } from './Modal';
import { AddACard } from './AddACard';

export function MainPage({ setCards, deleteItem, cards }) {

    return (
        <>
        <div className="MainPage">
            <div className="toDoColumn column">
                <TaskList type="To Do" deleteItem={deleteItem} myCards={cards} />
            </div>
            <div className="inProgColumn column">
                <TaskList type="In Progress" deleteItem={deleteItem} myCards={cards} />
            </div>
            <div className="doneColumn column">
                <TaskList type="Done" deleteItem={deleteItem} myCards={cards} />
            </div>
           
        </div>
        <div className='ShowForm'>
            <AddACard setCards={setCards} cards={cards} />
            {/* <Modal/> */}
        </div>
        </>
        
    )


}