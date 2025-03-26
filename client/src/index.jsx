import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Application'
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
