import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header"
import SearchBar from './SearchBar'
import React from "react"
import EmployeeList from './EmployeeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <SearchBar />
    <EmployeeList />



    </>
  )
}

export default App
