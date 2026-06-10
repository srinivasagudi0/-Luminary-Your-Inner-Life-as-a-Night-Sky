import { useState } from 'react';

function SkyPage({memories, selectedMemory, setSelectedMemory}) {
    const [supriseMemory, setSupriseMemory] = useState(null);

    function getStarColor(emotion) {
        if (emotion === 'joy') return 'gold';
        if (emotion === 'sadness') return 'skyblue';
        if (emotion === 'anger') return 'tomato';
        return 'white';
    }

    function supriseMe() {
        if (memories.length === 0) return;

        const randomIndex = Math.floor(Math.random() * memories.length);
        const randomMemory = memories[randomIndex];

        setSupriseMemory(randomMemory);
    }
    return (
        <main className="page sky-page">
            <section className="hero">
                <h1>Your Inner Sky</h1>
                <p>
                    Every Moment you plant beccomes a star. Some shine with joy, <br />
                    some glow with calm, and some quietly hold what you felt 
                </p>

                <button onClick={supriseMe}>
                    Suprise Me
                </button>
            </section>

            {supriseMemory && (
                <div className="suprise-card">
                    <h2>A Memory Found You</h2>

                    <p>
                        A star from your past has drifted forward. <br />
                        Open it and revist the moment it holds.
                    </p>

                    <button onClick={() => setSelectedMemory(supriseMemory)}>View Memory</button>

                    <button onClick={() => setSupriseMemory(null)}>Close</button>

                    
                </div>
            )} 

           <div className="sky">
        {memories.map((memory) => (
          <div
            key={memory.id}
            onClick={() => setSelectedMemory(memory)}
            className={`star ${memory.emotion}`}
            style={{
              left: `${memory.x}%`,
              top: `${memory.y}%`,
              background: memory.color || getStarColor(memory.emotion),
              boxShadow: `0 0 12px ${memory.color || getStarColor(memory.emotion)}`,
            }}
            title={memory.text}
          />
        ))}
      </div>

      {selectedMemory && (
        <div>
            <h2>{selectedMemory.starName || "Memory Star"}</h2>
            <p>{selectedMemory.text}</p>

            <p>Emotion: {selectedMemory.emotion}</p>
            {selectedMemory.createdAt && <p>{selectedMemory.createdAt}</p>}
        </div>
      )}

      </main>
    )
}

export default SkyPage;

 
