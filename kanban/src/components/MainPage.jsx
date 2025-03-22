
import { useState } from "react";
import { TaskList } from "./TaskList";

export function MainPage({ deleteItem, cards}) {
  const toDoList = cards.filter((card) => card.status === "To Do");
  const inProgressList = cards.filter((card) => card.status === "In Progress");
  const doneList = cards.filter((card) => card.status === "Done");
  const [toDoCards, setToDoCards] = useState(toDoList)
  const [inProgCards, setInProgCards] = useState(inProgressList)
  const [doneCards, setDoneCards] = useState(doneList)
    return (
        <div className="MainPage">
            <div className="toDoColumn column">
                {toDoCards.length} tasks to do:
                <TaskList deleteItem={deleteItem} myCards={toDoCards} />
                <button>Add a card</button>
            </div>
            <div className="inProgColumn column">
                {inProgCards.length} tasks in progress:
                <TaskList deleteItem={deleteItem} myCards={inProgCards} />
                <button>Add a card</button>
            </div>
            <div className="doneColumn column">
                {doneCards.length} tasks done:
                <TaskList deleteItem={deleteItem} myCards={doneCards} />
                <button>Add a card</button>
            </div>
        </div>
    )

    
}