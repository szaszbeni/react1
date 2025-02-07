import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Rolam from './components/rolam'
import Navbar from './components/UI/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='about' element={<Rolam nev='Dajabito' kor={21}/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
