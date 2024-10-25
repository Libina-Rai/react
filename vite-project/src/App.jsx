import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const[mode, setMode]= useState('light')
  // const[text, setText]= useState('black')
  
  const toggleMode=()=>{
    if (mode=='light') {
      setMode('dark')
      // setTextColor('white')
    }
    else{
      setMode('light')
      // setTextColor('black')
    }
  }

  return (
    <div className="App">

      <Navbar title = "this is header" mode={mode}  toggleMode={toggleMode}  />
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          please click me {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        please run this page
      </p> */}
    </div>
  )
}

export default App
