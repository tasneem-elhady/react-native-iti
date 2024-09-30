import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Movies from './components/Movies.jsx';
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Header></Header>
  <Movies></Movies>
  </>
)
