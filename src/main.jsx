import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralInformation from "./components/GeneralInformation.jsx";
import SchoolHistory from "./components/SchoolHistory.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation />
    <div>
      <h1>School History: </h1>
      <SchoolHistory />
    </div>
  </StrictMode>
)
