import './App.css';
import Batch2026 from './Component/Batches/Batch2026';
import Batch2025 from './Component/Batches/Batch2025';
import Batch2024 from './Component/Batches/Batch2024';
import Batch2023 from './Component/Batches/Batch2023';
import Batch2022 from './Component/Batches/Batch2022';


import Body from './Component/Body/Body';
import Navbar from './Component/Navbar.js';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#031637';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/Batches/Batch2026" element={<Batch2026 />} />
          <Route exact path="/Batches/Batch2025" element={<Batch2025 />} />
          <Route exact path="/Batches/Batch2024" element={<Batch2024 />} />
          <Route exact path="/Batches/Batch2023" element={<Batch2023 />} />
          <Route exact path="/Batches/Batch2022" element={<Batch2022 />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
