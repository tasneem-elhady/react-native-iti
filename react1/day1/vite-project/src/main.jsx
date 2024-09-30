import { StrictMode } from 'react'
// import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Movies from './components/Movies.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Movies></Movies>
      <Footer signature = "Tasneem Salama"></Footer>
    </>
  </StrictMode>,
)
