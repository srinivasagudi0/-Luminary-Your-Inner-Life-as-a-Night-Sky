import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SkyPage from './pages/SkyPage';
import AddMemoryPage from './pages/AddMemoryPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  const [memories, setMemories] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedMemories = localStorage.getItem('luminary-memories');

    if (savedMemories) {
      try {
        setMemories(JSON.parse(savedMemories));
      } catch {
        localStorage.removeItem('luminary-memories');
      }
    }

    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    localStorage.setItem('luminary-memories', JSON.stringify(memories));
  }, [hasLoaded, memories]);
  function addMemory(newMemory) {
    setMemories([...memories, newMemory]);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />


        <Routes>
          <Route
            path="/"
            element={
              <SkyPage
                memories={memories}
                selectedMemory={selectedMemory}
                setSelectedMemory={setSelectedMemory}
              />
            }
          />
          <Route
            path="/add"
            element={<AddMemoryPage addMemory={addMemory} />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
