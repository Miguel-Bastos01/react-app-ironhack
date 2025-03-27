import { MainPage } from "../components/MainPage";

export function Dashboard({ deleteItem, cards, setCards}) {
    return(
        <div className="DashBoardBorder">
            Dashboard
            <MainPage deleteItem={deleteItem} cards={cards} setCards={setCards}/>
        </div>
    )
}