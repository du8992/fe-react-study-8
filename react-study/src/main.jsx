import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import TempApp from './TempApp.jsx'
import Quiz0611 from './quiz/quiz0611.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TempApp /> */}
    <Quiz0611 />
  </StrictMode>,
)
