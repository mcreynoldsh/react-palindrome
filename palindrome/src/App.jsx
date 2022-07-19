import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import OutputLabel from '../components/OutputLabel'

function App() {
  const [isPal, setIsPal] = useState(false)
  const [word, setWord] = useState("")
  let outputLabel = <p></p>

  
  function handleChange(){
    let inputVal = document.getElementById("myInput").value;
    setWord(inputVal)
    let inputArray = inputVal.split("")
    let backArray = []
    let forArray = []
    
    let re = new RegExp("[0-9a-zA-Z]")
    for(const letter of inputArray){
      if(re.test(letter)){
        forArray.push(letter)
        backArray.unshift(letter)
      }
    }
    
    if(forArray.join('') == backArray.join('')){
      setIsPal(true)
    }
    else{
      setIsPal(false)
    }
    
  }

  return (
    <div className="App">
      <input onChange= {handleChange} id="myInput" type="text" />
      <OutputLabel isPal = {isPal} word={word}/>
    </div>
  )
}

export default App
