import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import TempApp from './TempApp.jsx'
// import Quiz0611 from './quiz/quiz0611.jsx'
import State01 from './components/State01.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <TempApp /> */}
    {/* <State01 /> */}
  </StrictMode>,
)
