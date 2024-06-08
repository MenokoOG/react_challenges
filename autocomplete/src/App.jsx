import React from "react"
import ToDoList from "./components/ToDoList"
import BottomBar from "./components/BottomBar"
import Header from "./components/Header"

import './App.css'

function App() {
  

  return (
    <div className="wrapper">
    <Header />
    <ToDoList />
    <BottomBar />
</div>
  )
}

export default App
