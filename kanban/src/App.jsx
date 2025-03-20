import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

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
          <MainPage />
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App
