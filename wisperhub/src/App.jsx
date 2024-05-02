import { useState } from 'react'
import './App.css'

import Conversation from "./conponents/conversation/Conversation"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <Conversation />
    </>
  )
}

export default App
