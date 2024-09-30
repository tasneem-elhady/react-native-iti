import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './componentsInteraction/Search.jsx'
import Movies from './componentsInteraction/root.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Movies></Movies>
)
