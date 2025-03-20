import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';


function App() {

  const list = [
    {
      "id": "1",
      "title": "Design Landing Page",
      "description": "Create a visually appealing landing page for the website.",
      "assignee": "Mary Davis",
      "status": "To Do",
      "priority": "High",
      "createdDate": "2023-09-15",
      "dueDate": "2023-09-30"
    },
    {
      "id": "2",
      "title": "Develop User Registration",
      "description": "Implement user registration functionality with email verification.",
      "assignee": "Jane Smith",
      "status": "In Progress",
      "priority": "Medium",
      "createdDate": "2023-09-16",
      "dueDate": "2023-10-10"
    },
    {
      "id": "3",
      "title": "Bug Fix: Login Issue",
      "description": "Investigate and fix the login problem reported by users.",
      "assignee": "Mark Johnson",
      "status": "In Progress",
      "priority": "High",
      "createdDate": "2023-09-17",
      "dueDate": "2023-09-25"
    },
    {
      "id": "4",
      "title": "Release Version 1.0",
      "description": "Prepare for the release of the first version of the application.",
      "assignee": "Sarah Brown",
      "status": "To Do",
      "priority": "High",
      "createdDate": "2023-09-18",
      "dueDate": "2023-10-05"
    },
    {
      "id": "5",
      "title": "Update Documentation",
      "description": "Update user documentation with the latest features and changes.",
      "assignee": "David Wilson",
      "status": "Done",
      "priority": "Low",
      "createdDate": "2023-09-19",
      "dueDate": "2023-09-30"
    }
  ]

  const [cards, setCards] = useState(list)

  
  const toDoList = cards.filter((status) => status.status === "To do");
  const inProgressList = cards.filter((status) => status.status === "In Progress");
  const doneList = cards.filter((status) => status.status === "Done");
  

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
          <MainPage list = {cards} />
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App
