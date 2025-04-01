import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './components/Application'
import './styles/index.scss'

hydrateRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
