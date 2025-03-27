import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
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

  const addTask = (e) => {
    e.preventDefault();
    const tasksCopy = [...tasks];
    tasksCopy.push({
      "title": title,
      "priority": priority,
      "deadline": deadline,
      "status": To-Do
    });
    setTasks[tasksCopy];
  }

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

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
            <Route path="/dashboard" element={<Dashboard cards={cards} deleteItem={deleteItem} setCards={setCards}/>} />
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
