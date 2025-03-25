import { Link } from 'react-router-dom';
import { useState } from "react";
import { TaskList } from "./TaskList";

export function MainPage({ deleteItem, cards }) {

    return (
            <div className="MainPage">
                <div className="toDoColumn column">
                    <TaskList type="To Do" deleteItem={deleteItem} myCards={cards} />
                    <button>Add a card</button>
                </div>
                <div className="inProgColumn column">
                    <TaskList type="In Progress" deleteItem={deleteItem} myCards={cards} />
                    <button>Add a card</button>
                </div>
                <div className="doneColumn column">
                    <TaskList type="Done" deleteItem={deleteItem} myCards={cards} />
                    <button>Add a card</button>
                </div>
            </div>

    )


}