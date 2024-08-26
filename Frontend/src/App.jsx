import { useState } from 'react'

import './App.css'
import RoomPayCard from './components/roomDetails/roomPayCard/RoomPayCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoomPayCard />
    </>
  )
}

export default App
