import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Home cards={cards} deleteItem={deleteItem} />} />
            <Route path="/about" element={<About />} />
          </Routes>
         
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App
