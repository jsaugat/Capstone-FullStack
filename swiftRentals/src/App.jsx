import { Outlet } from 'react-router-dom'
import './styles/App.scss'
import NavBar from './components/Header/NavBar'

export default function App() {
  return (
    <main className='App'>
      {/* header */}
      <header>
        <NavBar />
      </header>

      {/* body */}
      <Outlet/>
      
      {/* footer */}
    </main>
  )
}

