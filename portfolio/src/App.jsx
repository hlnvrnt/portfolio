import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
 
  return (
    <div>
    <Navbar/>
    <Outlet />
    <Footer />
    </div>
  )
   
}

export default App;

