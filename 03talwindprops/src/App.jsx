import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "Bhupender",
    age: 21
  }

  let newArr = [1, 2, 3];

  return (
    <>
    <h1 className="text-5xl font-bold bg-green-500 text-white mb-4">
      Tailwind
    </h1>
    <Card username = "Bhupender Singh" btntext = "Click me"/>
    <Card username = "Satyam" btntext = "Visit me"/>
  
    </>
  )
}

export default App
