import {TaskList} from "./TaskList";

export function MainPage({toDoList, inProgList, doneList}) {

    // const deleteItem = () => {
    //     const copyList = [...list];
    //     copyList.pop();
    //     setCards(copyList);
    //   }
    
    //   const addItem = () => {
    //     const copyList = [...list];
    //     const newItem = {};
    //     copyList.push(newItem);
    //     setCards(copyList);
    //   }


    return (
        <div className="MainPage">
            <div className="toDoColumn column">
            {toDoList.length} tasks to do:
                <TaskList myCards={toDoList}/>
                <button>Add a card</button>
                <button>Remove a card</button>
            </div>
            <div className="inProgColumn column">
            {inProgList.length} tasks in progress:
            <TaskList myCards={inProgList}/>
                <button>Add a card</button>
                <button>Remove a card</button>
            </div>
            <div className="doneColumn column">
            {doneList.length} tasks done:
            <TaskList myCards={doneList}/>
                <button>Add a card</button>
                <button>Remove a card</button>
            </div>
        </div>
    )
}