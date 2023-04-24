import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
   <Header></Header>
   <Outlet></Outlet>
   
   <Footer></Footer>
  
   </div>
  )
}

export default App
