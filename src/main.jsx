import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GeneralInformation from "./components/GeneralInformation.jsx";
import SchoolHistory from "./components/SchoolHistory.jsx";
import WorkHistory from "./components/WorkHistory.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInformation />
    <SchoolHistory />
    <WorkHistory />
  </StrictMode>
);
