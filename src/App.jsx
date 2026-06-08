import { useState } from 'react';

function App() {
  const [entry, setEntry] = useState('');
  const [memories, setMemories] = useState([]);

  function saveEntry() {
    if (entry.trim() === '') return;

    const newMemory = {
      id: Date.now(),
      text: entry,
      x: Math.random() * 90,
      y: Math.random() * 70,
    };
    setMemories([...memories, newMemory]);
    setEntry('');
  }
  return (
    <div>
      <h1>Luminary</h1>
      <p>Your inner life as a night sky</p>

      <textarea
        placeholder="Write a thought, memory, or gratitude..."
        value={entry}
        onChange={(event) => setEntry(event.target.value)}
        />
      <br />

      <button onClick={saveEntry}>Plant Star</button>
      <h2>Memories</h2>
      
      <div className="Sky">
        {memories.map((memory) => (
          <div
          key={memory.id}
          className="star"
          style={{
            left: `${memory.x}%`,
            right: `${memory.y}%`
          }}
          title={memory.text}
          />
        ))}
      </div>

    </div>
  );
}

export default App;