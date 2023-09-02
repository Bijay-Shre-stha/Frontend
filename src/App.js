import React, { useState, useEffect } from 'react';
import './App.css';
import Batch2026 from './Component/Batches/Batch2026';
import Batch2025 from './Component/Batches/Batch2025';
import Batch2024 from './Component/Batches/Batch2024';
import Batch2023 from './Component/Batches/Batch2023';
import Batch2022 from './Component/Batches/Batch2022';
import Body from './Component/Body/Body';
import Navbar from './Component/Navbar.js';
import Footer from './Component/Footer/Footer';
import Clubs from './Component/Clubs/Clubs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Society from './Component/Society/Society';
import Spinner from './Component/Loading/Spinner';

function App() {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
  }, []);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b2735';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        {loading ? (
          <Spinner /> 
        ) : (
          <Routes>
            <Route exact path="/" element={<Body mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/Batches/Batch2026" element={<Batch2026 />} />
            <Route exact path="/Batches/Batch2025" element={<Batch2025 />} />
            <Route exact path="/Batches/Batch2024" element={<Batch2024 />} />
            <Route exact path="/Batches/Batch2023" element={<Batch2023 />} />
            <Route exact path="/Batches/Batch2022" element={<Batch2022 />} />

            <Route exact path="/Clubs" element={<Clubs mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/Society&Community" element={<Society />} />
          </Routes>
        )}
        <Footer mode={mode} toggleMode={toggleMode} />
      </Router>
    </div>
  );
}

export default App;
