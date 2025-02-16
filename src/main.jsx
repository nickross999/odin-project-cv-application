import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralInformation from "./components/GeneralInformation";
import './css/GeneralInformation.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation />
  </StrictMode>,
)
