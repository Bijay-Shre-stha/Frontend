import React, { useState } from 'react';
import './App.css';
import Batch2026 from './Component/Batches/Batch2026';
import Batch2025 from './Component/Batches/Batch2025';
import Batch2024 from './Component/Batches/Batch2024';
import Batch2023 from './Component/Batches/Batch2023';
import Batch2022 from './Component/Batches/Batch2022';
import Batch2021 from './Component/Batches/Batch2021';
import Batch2020 from './Component/Batches/Batch2020';
import Batch2019 from './Component/Batches/Batch2019';
import Batch2018 from './Component/Batches/Batch2018';
import Batch2017 from './Component/Batches/Batch2017';
import Batch2016 from './Component/Batches/Batch2016';
import Batch2015 from './Component/Batches/Batch2015';

import BCA2022 from './Component/BatchesBCA/BCA2022';
import BCA2023 from './Component/BatchesBCA/BCA2023';
import BCA2024 from './Component/BatchesBCA/BCA2024';
import BCA2025 from './Component/BatchesBCA/BCA2025';
import BCA2026 from './Component/BatchesBCA/BCA2026';

import Body from './Component/Body/Body';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Clubs from './Component/Clubs/Clubs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Society from './Component/Society/Society';
import Gallery from './Component/Gallery/Gallery';

function App() {
  const [mode, setMode] = useState('light');

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
      <section className='wrapper'>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </section>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Body mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/Batches/Batch2026" element={<Batch2026 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2025" element={<Batch2025 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2024" element={<Batch2024 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2023" element={<Batch2023 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2022" element={<Batch2022 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2021" element={<Batch2021 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2020" element={<Batch2020 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2019" element={<Batch2019 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2018" element={<Batch2018 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2017" element={<Batch2017 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2016" element={<Batch2016 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/Batch2015" element={<Batch2015 mode={mode} toggleMode={toggleMode}/>} />


          <Route exact path="/Batches/BCA2022" element={<BCA2022 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/BCA2023" element={<BCA2023 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/BCA2024" element={<BCA2024 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/BCA2025" element={<BCA2025 mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/Batches/BCA2026" element={<BCA2026 mode={mode} toggleMode={toggleMode}/>} />

          <Route exact path="/Clubs" element={<Clubs mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/Society&Community" element={<Society mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/gallery" element={<Gallery mode={mode} toggleMode={toggleMode}/>}/>
        </Routes>
        <Footer mode={mode} toggleMode={toggleMode} />
      </Router>
    </div>
  );
}

export default App;
