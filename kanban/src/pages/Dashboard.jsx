import { MainPage } from "../components/MainPage";

export function Dashboard({showForm, setShowForm, addTask, taskName, setTaskName, taskDescription, setTaskDescription, deadline, setDeadline, priority, setPriority, status, setStatus, deleteItem, cards, setCards}) {
    return(
        <div className="DashBoardBorder">
            Dashboard
            <MainPage showForm={showForm} setShowForm={setShowForm} addTask={addTask} taskName={taskName} setTaskName={setTaskName} taskDescription={setTaskDescription} deadline={deadline} setDeadline={setDeadline} priority={priority} setPriority={setPriority} status={status} setStatus={setStatus} deleteItem={deleteItem} cards={cards} setCards={setCards}/>
        </div>
    )
}