import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(1)

  // let counter =1

  const addValue = () =>{
    setCounter(counter+1)
    console.log("counter value", setCounter)
  }

  const removevalue = () =>{
    setCounter(counter-1)
   console.log("counter value", setCounter)
  }

  return (
      <>   
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removevalue}>Remove Value {counter}</button>
      </>
  )
}

export default App
