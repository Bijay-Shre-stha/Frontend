import './App.css';
import Navbar from './Component/Navbar.js';
import { useState } from "react";


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
        <Navbar mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
