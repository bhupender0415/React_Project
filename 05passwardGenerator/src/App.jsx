import { useState } from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  /// useRef hook
  const passwordRef = useRef(null);

  // how to use use callback hook 
  // const passwordGenerator = useCallback(fn, dependencies)

  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed){
          str += "1234567890";
      }
      if(charAllowed){
        str += "~!@#$%^&*()_+=-{}[]?/";
      }

      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length+1);
        pass += str.charAt(char);
      }
      setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])


// copy to clipboard function 
const copyToClipboard = useCallback(() => {
  passwordRef.current?.select() // highlight the copied text
  // below line will select the range of text
  // passwordRef.current?.setSelectionRange(0, 3)
  window.navigator.clipboard.writeText(password)
}, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className = "w-1/2 h- mx-auto shadow-md rounded-lg px-4 py-8 mt-9 text-orange-500 bg-gray-700">
        <h1 className = "text-white text-center text-2xl">Password Generator</h1>
        <div className = "flex shadow rounded-lg overflow-hidden mb-5 mt-4 px-">
          <input 
          type="text"
          value = {password}
          className = "outline-none w-full py-1 px-3"
          placeholder = "password"
          readOnly
          ref = {passwordRef}
           />
           <button
           onClick = {copyToClipboard}
           className = "outline-none bg-sky-500 hover:bg-sky-700 ... text-white px-4 py-1"
           >copy</button>
        </div>
        <div className = "fleas text-sm gap-x-2">
          <div className = "fleax item-center gap-x-1">
                <input 
                type="range"
                min = {6}
                max = {50}
                value = {length} 
                className = "cursor-pointer"
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label className = "text-white"> Input: {length}</label>
                <input 
                type="checkbox" 
                defaultChecked = {numberAllowed}
                id = "numberInput"
                className = "ml-4 mr-1"
                onChange = {() => {setNumberAllowed((prev) => !prev)}}
                />
                <label className = "text-white">Numbers</label>

                <input 
                type="checkbox" 
                defaultChecked = {charAllowed}
                id = "numberInput"
                className = "ml-4 mr-1"
                onChange = {() => {setCharAllowed((prev) => !prev)}}
                />
                <label className = "text-white">Characters</label>
          </div>
        </div>
      </div>
      
      <h3 className = "text-white text-center">Made with ❤️</h3>
      
      
    </>
  )
}

export default App
