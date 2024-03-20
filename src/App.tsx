import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { Home } from './pages/Home'

import { useAuth } from './core/context/hooks'

import './App.css'


function App() {

  const { token } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {/**
         * The login page should be displayed only if the user is not authenticated.
         * and path must be '/login' or different to the path used by the component <Home />
         * 
         * Actually, this path configuration causes no rendering of the Home component when the user is authenticated.
         */}
        <Route path='/' element={<Login />} />
        {token && <Route path='/' element={<Home />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default App
