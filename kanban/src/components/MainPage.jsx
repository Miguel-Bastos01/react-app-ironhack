import { Link } from 'react-router-dom';
import { useState } from "react";
import { TaskList } from "./TaskList";
import { AddACard } from './AddACard';

export function MainPage({ setCards, deleteItem, cards }) {

    return (
            <div className="MainPage">
                <div className="toDoColumn column">
                    <TaskList type="To Do" deleteItem={deleteItem} myCards={cards} />
                    <AddACard setCards={setCards} cards={cards} />
                    {/* <button type="submit" onClick={() => <AddACard title={title} priority={priority} deadline={deadline}/>}>Add a card</button> */}
                </div>
                <div className="inProgColumn column">
                    <TaskList type="In Progress" deleteItem={deleteItem} myCards={cards} />
                    <button type="submit" onClick={() => <AddACard title={title} priority={priority} deadline={deadline}/>}>Add a card</button>
                </div>
                <div className="doneColumn column">
                    <TaskList type="Done" deleteItem={deleteItem} myCards={cards} />
                    <button type="submit" onClick={() => <AddACard title={title} priority={priority} deadline={deadline}/>}>Add a card</button>
                </div>
            </div>

    )


}