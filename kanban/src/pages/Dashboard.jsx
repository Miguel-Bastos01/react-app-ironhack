import { MainPage } from "../components/MainPage";

export function Dashboard({ deleteItem, cards }) {
    return(
        <>
            Dashboard
            <MainPage deleteItem={deleteItem} cards={cards} />
        </>
    )
}