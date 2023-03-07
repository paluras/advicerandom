import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const diceImg = <img className='diceImg' src="src\assets\icon-dice.svg" alt='diceIcon'></img>

function App() {
  const [count, setCount] = useState([])
  const [advice, setAdvice] = useState([])
 
  

  const hook = () => {
    axios
    .get("https://api.adviceslip.com/advice")
    .then(response =>{
      setCount(response["data"]["slip"]["id"])
      setAdvice(response["data"]["slip"]["advice"])
    })
  }
  useEffect(hook, [])

 
  return (
    <div className="App">

      <div className='main-element'>
      <div className='id'>Advice #{count}</div>
      <div className='advice'>{advice}</div>
      <img className='pattern' src='src\assets\pattern-divider-desktop.svg' alt="patter-divider"></img>
      <button className='rndBtn' onClick={hook}>{diceImg}</button>
      </div>
    </div>
  )
}

export default App
