import { Link } from 'react-router-dom';
import { useState } from "react";
import { TaskList } from "./TaskList";
import { Modal } from './Modal';

export function MainPage({ addTask, deleteItem, cards, setCards }) {

    return (
        <>
            <div className="MainPage">
            <h3 className="ColumnTitle">To Do: {cards.length}</h3>
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
            <Modal addTask={addTask}/>
        </>

    )


}