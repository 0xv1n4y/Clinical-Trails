import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import AppBarComponent from './components/AppBar';
import DrawerComponent from './components/Drawer';
import MainContentComponent from './components/MainContent';
import AllClinicalTrialsComponent from './components/AllClinicalTrails'; 
import ClinicalTrialForm from "./components/ClinicalTrialForm"

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedTrial, setSelectedTrial] = useState(null)
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      <Router>
        <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
        <DrawerComponent drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />

        {/* Define Routes */}
        <Routes>
          {/* Route for MainContent */}
          <Route path="/" element={<MainContentComponent drawerOpen={drawerOpen}  />} />
          
          {/* Route for All Clinical Trials */}
          <Route path="/clinical-trials" element={<AllClinicalTrialsComponent  drawerOpen={drawerOpen} setSelectedTrial={setSelectedTrial}  />} />
          <Route path="/download-pdf" element={<ClinicalTrialForm selectedTrial={selectedTrial} drawerOpen={drawerOpen} />} />
          <Route path="/edit-trial" element={<MainContentComponent selectedTrial={selectedTrial} drawerOpen={drawerOpen} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
