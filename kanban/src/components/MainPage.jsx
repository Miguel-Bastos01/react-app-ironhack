import {TaskList} from "./TaskList";

export function MainPage({list}) {

    const deleteItem = () => {
        const copyList = [...list];
        copyList.pop();
        setCards(copyList);
      }
    
      const addItem = () => {
        const copyList = [...list];
        const newItem = {};
        copyList.push(newItem);
        setCards(copyList);
      }


    return (
        <div className="MainPage">
            <div className="column">
            {list.length} tasks to do:
                <TaskList myCards={list}/>
                <button>Add a card</button>
                <button>Remove a card</button>
            </div>
            <div className="column">In Progress
            <TaskList myCards={list}/>
                <button>Add a card</button>
                <button>Remove a card</button>
            </div>
            <div className="column">Done
            <TaskList myCards={list}/>
                <button>Add a card</button>
                <button>Remove a card</button>
            </div>
        </div>
    )
}