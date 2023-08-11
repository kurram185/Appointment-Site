import React, { createContext, useEffect, useReducer, useState } from "react";
import ValidationPage from "./components/ValidationPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { reducer, initialState } from "./useReducer";
import "./App.css";
import Dasboard from "./components/Dasboard";
import Sidebar from "./sub-component/SideBar";
import PendingPatients from "./components/PendingPatients";
import NavBar from "./sub-component/NavBar";
import "./styles/Dashboard.css";
import PatientsHistory from "./components/PatientsHistory";
import LandingPage from "./components/LandingPage";
import AppointementForm from "./components/AppointementForm";
export const userContext = createContext();
const Routing = () => {
  return (
    <Routes>
      <Route path="/Validation" element={<ValidationPage />} />
      <Route path="/Dashboard" element={<Dasboard />} />
      <Route path="/PendingPatients" element={<PendingPatients />} />
      <Route path="/PatientHistory" element={<PatientsHistory />} />
      {/* <Route path="/" element={<AppointementForm />} /> */}
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
function App() {
  const [noCollapse, setCollapse] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateCollapse = (val) => {
    setCollapse(val);
  };
  const location = useLocation();
  const mainContentStyles =
    location.pathname !== "/" && location.pathname !== "/Validation"
      ? {
          marginLeft:
            noCollapse && window.innerWidth < 768
              ? "35%"
              : noCollapse
              ? "16.5%"
              : window.innerWidth < 768
              ? "17%"
              : "4%",
          transition: "all 0.3s ease",
        }
      : {};

  useEffect(() => {
    if (window.innerWidth < 768) setCollapse(false);
  }, []);
  return (
    <div className="app-container">
      {location.pathname !== "/" && location.pathname !== "/Validation" && (
        <Sidebar
          prop={(val) => {
            updateCollapse(val);
          }}
        />
      )}
      <div className="main-content" style={mainContentStyles}>
        {location.pathname !== "/" && location.pathname !== "/Validation" && (
          <NavBar />
        )}
        <userContext.Provider value={{ state, dispatch }}>
          <Routing />
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
