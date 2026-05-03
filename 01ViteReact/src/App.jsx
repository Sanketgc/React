import { useState } from 'react'

import Chai from './chai'

function App() {
  // const [count, setCount] = useState(0)
  const username = "Sanket"

  return (
    <div>
      <h1>Welcome to Vite | {username}</h1>
      <Chai />
    </div>
  );
}

export default App
