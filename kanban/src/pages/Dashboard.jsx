import { MainPage } from "../components/MainPage";

export function Dashboard({addTask, deleteItem, cards, setCards}) {
    return(
        <div className="DashBoardBorder">
            <h4 className="dashboard-title">Dashboard</h4>
            <MainPage addTask={addTask} deleteItem={deleteItem} cards={cards} setCards={setCards}/>
        </div>
    )
}