import { MainPage } from "../components/MainPage";

export function Home({ deleteItem, cards }) {
    return(
        <>
            Home Page
            <MainPage deleteItem={deleteItem} cards={cards} />
        </>
    )
}