import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GIfExpertApp } from './GIfExpertApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GIfExpertApp />
  </StrictMode>,
)
