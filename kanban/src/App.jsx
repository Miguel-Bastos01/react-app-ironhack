import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { ErrorPage } from './pages/errorPage';
import { Route, Routes } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import list from "./assets/list.json"


function App() {  

  const [cards, setCards] = useState(list)

  const deleteItem = (id) => {
    const copyList = structuredClone(cards);
    const filter = copyList.filter((todo) => todo.id !== id);
    setCards(filter);
  }

  const addTask = (task) => {
    const tasksCopy = structuredClone(cards);
    tasksCopy.push(task);
    setCards(tasksCopy);
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
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard addTask={addTask} cards={cards} deleteItem={deleteItem} setCards={setCards}/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage/>}/>
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
