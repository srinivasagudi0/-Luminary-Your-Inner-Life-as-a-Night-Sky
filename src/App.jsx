import { useState } from 'react';
import './App.css';

function App() {
  const [entry, setEntry] = useState('');
  const [memories, setMemories] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);


  function saveEntry() {
    if (entry.trim() === '') return;

    const newMemory = {
      id: Date.now(),
      text: entry,
      emotion: detectEmotion(entry),
      x: Math.random() * 90,
      y: Math.random() * 70,
    };
    setMemories([...memories, newMemory]);
    setEntry('');
  }

  function detectEmotion(text) {

    const lowerText = text.toLowerCase();
    if (
      lowerText.includes('happy') ||
      lowerText.includes('excited') ||
      lowerText.includes('grateful') ||
      lowerText.includes('joy') ||
      lowerText.includes('love')
    ) {
      return 'joy';
    }
    if (
      lowerText.includes('sad') ||
      lowerText.includes('miss') ||
      lowerText.includes('depressed')
    ) {
      return 'sadness';
    }
    if (
      lowerText.includes('angry') ||
      lowerText.includes('frustrated') ||
      lowerText.includes('annoyed') || 
      lowerText.includes('mad')
    ) {
      return 'anger';
    }
    return 'calm';
  }

  function getStarColor(emotion) {
    if (emotion === 'joy') return 'gold';
    if (emotion === 'sadness') return 'skyblue';
    if (emotion === 'anger') return 'tomato';
    return 'white';
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

      {selectedMemory && (
        <div>
          <h2>Memory</h2>
          <p>{selectedMemory.text}</p>
          <p>Emotion: {selectedMemory.emotion}</p>
        </div>
      )}

      <h2>Memories</h2>
      
      <div className="sky">
        {memories.map((memory) => (
          <div
          key={memory.id}
          onClick={() => setSelectedMemory(memory)}
          className={`star ${memory.emotion}`}
          style={{
            left: `${memory.x}%`,
            top: `${memory.y}%`,
            background: getStarColor(memory.emotion),
            boxShadow: `0 0 12px ${getStarColor(memory.emotion)}`
          }}
          title={memory.text}
          />
        ))}
      </div>

    </div>
  );
}

export default App;