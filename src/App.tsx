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
        <Route path='/' element={<Login />} />
        {token && <Route path='/' element={<Home />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default App
