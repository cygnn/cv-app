import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import GenInfo from './components/GenInfo'
import './index.css'
import EducExp from './components/EducExp'
import WorkExp from './components/WorkExp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenInfo />
    <EducExp />
    <WorkExp />
  </StrictMode>,
)
