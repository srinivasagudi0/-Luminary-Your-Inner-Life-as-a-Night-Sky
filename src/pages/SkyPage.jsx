import { useState } from 'react';
import { Link } from 'react-router-dom';

const emotionNames = {
  happy: 'Joy',
  joy: 'Joy',
  calm: 'Calm',
  sadness: 'Sadness',
  anger: 'Anger',
};

function SkyPage({ memories, selectedMemory, setSelectedMemory }) {
  const [surpriseMemory, setSurpriseMemory] = useState(null);

  function findMemory() {
    if (!memories.length) return;
    setSurpriseMemory(memories[Math.floor(Math.random() * memories.length)]);
  }

  function revealMemory() {
    setSelectedMemory(surpriseMemory);
    setSurpriseMemory(null);
  }

  return (
    <main className="sky-page">
      <header className="sky-heading">
        <div>
          <span className="kicker">Your private universe</span>
          <h1>Your Inner Sky</h1>
          <p>Each star is a moment you chose to remember.</p>
        </div>

        <div className="sky-controls">
          <span className="star-count">
            <strong>{memories.length}</strong> {memories.length === 1 ? 'memory' : 'memories'}
          </span>
          <button onClick={findMemory} disabled={!memories.length}>Surprise me</button>
        </div>
      </header>

      <section className="sky" aria-label="Memory sky">
        <div className="sky-legend" aria-label="Emotion colors">
          <span><i className="happy" />Joy</span>
          <span><i className="calm" />Calm</span>
          <span><i className="sadness" />Sadness</span>
          <span><i className="anger" />Anger</span>
        </div>

        {!memories.length && (
          <div className="empty-sky">
            <div className="empty-star" />
            <h2>Your sky is empty</h2>
            <p>Write down a moment and give it a place to shine.</p>
            <Link to="/add">Plant your first memory</Link>
          </div>
        )}

        <svg className="constellations" aria-hidden="true">
          {memories.map((memory, index) => {
            const nextMemory = memories
              .slice(index + 1)
              .find((other) => other.emotion === memory.emotion);

            if (!nextMemory) return null;

            return (
              <line
                key={memory.id}
                x1={`${memory.x}%`}
                y1={`${memory.y}%`}
                x2={`${nextMemory.x}%`}
                y2={`${nextMemory.y}%`}
                className={`constellation-line ${memory.emotion}`}
              />
            );
          })}
        </svg>

        {memories.map((memory, index) => (
          <button
            key={memory.id}
            className={`star ${memory.emotion}`}
            style={{
              left: `${Math.max(4, Math.min(96, memory.x))}%`,
              top: `${Math.max(10, Math.min(92, memory.y))}%`,
              animationDelay: `${index * -0.4}s`,
            }}
            onClick={() => setSelectedMemory(memory)}
            aria-label={`Open memory: ${memory.text}`}
          />
        ))}

        <p className="sky-hint">Select a star to revisit its memory</p>
      </section>

      {selectedMemory && (
        <aside className="memory-panel">
          <button className="close" onClick={() => setSelectedMemory(null)} aria-label="Close">X</button>
          <span className={`emotion ${selectedMemory.emotion}`}>
            {emotionNames[selectedMemory.emotion] || 'Memory'}
          </span>
          <h2>{selectedMemory.starName || 'A moment in your sky'}</h2>
          <p>{selectedMemory.text}</p>
          {selectedMemory.createdAt && <time>{selectedMemory.createdAt}</time>}
        </aside>
      )}

      {surpriseMemory && (
        <div className="suprise-overlay">
          <div className="suprise-card">
            <span className="suprise-icon">✨</span>
            
            <h2>A Memory Found You!</h2>

            <p>
              A star from your past has drifted forward.<br />
              Would you like to revisit it?

            </p>
            <div className="supirse-buttons">
              <button onClick= {() => {
                setSelectedMemory(surpriseMemory);
                setSurpriseMemory(null);
              }}
              >
                View Memory
              </button>
              <button 
                className="close-suprise"
                onClick={() => setSurpriseMemory(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

export default SkyPage;
