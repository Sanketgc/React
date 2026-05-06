import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-white p-4 rounded-xl'>Tailwind test</h1>
      <Card username="John Doe" year="2023" txtbtn="Learn More"/>
      <Card username="Jane Smith" year="2024" txtbtn="Learn More"/>
      <Card username="Jane Smith" year="2024" />
    </>
  )
}

export default App
