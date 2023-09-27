import { useState } from 'react' // hooks imported
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // how to use hooks  let [variable, function] = useState(15);
    let [counter, setCounter] = useState(15);


  // no need to use this -> let counter = 15;




 /**
 * function name: addValue 
 * des          : creating Aerro function for button click to 
 *                increase the counter value by one
 *
 */
  const addValue = () => {
    if(counter <= 19){
      setCounter(counter+1);  // using hooks we are incrementing value of counter
      // console.log("value added", counter);
    }
    
  }




 /**
 * function name: remove 
 * des          : creating Aerro function for button click to 
 *                decrease the counter value by one
 *
 */
  const remove = () => {
    if(counter >= 1){
      setCounter(counter-1);  // using hooks we are decrementing value of counter
      // console.log("value removed", counter);
    }
  
  }

  return (
    <>
      <h1>Hello this is counter project</h1>
      <h2>Counter value: {counter}</h2>        
      <button onClick = {addValue} >Add Value</button> 
      <br />
      <button onClick = {remove}>Remove value</button>
      
    </>
  )
}

export default App
