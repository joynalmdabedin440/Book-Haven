
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className='max-w-7xl mx-auto '>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
    
  )
}

export default App
