import { MainPage } from "../components/MainPage";

export function Dashboard({addTask, deleteItem, cards, setCards}) {
    return(
        <div className="DashBoardBorder">
            <h1 className="dashboard-title">Dashboard</h1>
            <MainPage addTask={addTask} deleteItem={deleteItem} cards={cards} setCards={setCards}/>
        </div>
    )
}