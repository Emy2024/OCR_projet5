import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/index.jsx'
import Apropos from './pages/Apropos/index.jsx'
import FicheLogement from './pages/FicheLogement/index.jsx'
import ErrorPage from './pages/Error/index.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/a-propos" element={<Apropos/>}/>
        <Route path="/fiche-logement/:id" element={<FicheLogement/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)

