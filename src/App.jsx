import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Center from './components/main/center'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar/>
     <Center/>
    </>
  )
}

export default App
