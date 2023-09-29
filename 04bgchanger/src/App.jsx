import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
      <div className = "w-full h-screen duration-200" style = {{backgroundColor: color}}>
          <div className = "fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
            <div className = "flex flex-wrap justify-center gap-8 shadow-lg bg-white px-4 py-3 rounded-3xl">
              <button  onClick = {() => setColor("red")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-white" style = {{backgroundColor: "red"}}>Red</button>
              <button  onClick = {() => setColor("Green")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-white" style = {{backgroundColor: "Green"}}>Green</button>
              <button  onClick = {() => setColor("Cyan")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-white" style = {{backgroundColor: "Cyan"}}>Cyan</button>
              <button  onClick = {() => setColor("blue")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-white" style = {{backgroundColor: "blue"}}>Blue</button>
              <button  onClick = {() => setColor("Olive")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-white" style = {{backgroundColor: "Olive"}}>Olive</button>
              <button  onClick = {() => setColor("lavender")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-Black" style = {{backgroundColor: "lavender"}}>Lavender</button>
              <button  onClick = {() => setColor("black")} className = "outline-none px-4 py-1 rounded-3xl shadow-lg text-white" style = {{backgroundColor: "black"}}>Black</button>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default App
