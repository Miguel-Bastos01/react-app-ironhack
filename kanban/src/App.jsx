import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';
import list from "./assets/list.json"


function App() {
  const [cards, setCards] = useState(list)
  
  const deleteItem = (id) => {
          const copyList = structuredClone(cards);
          const filter = copyList.filter((todo) => todo.id !== id);
          setCards(filter);
      } 
  
  return (
    <div className='App'>
      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='Content'>
        <div className='SideBar'>
          <SideBar />
        </div>
        <div className='MainPage'>
          <MainPage deleteItem={deleteItem} cards={cards} />
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App
