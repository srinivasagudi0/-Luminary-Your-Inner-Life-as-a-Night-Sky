import { useState } from 'react';

function AddMemoryPage({ addMemory }) {
    const [entry, setEntry] = useState('');

    function detectEmotion(text) {
        const lowerText = text.toLowerCase();

        if (
            lowerText.includes("happy") ||
            lowerText.includes("joy") ||
            lowerText.includes("excited") ||
            lowerText.includes("love")
        ) {
            return 'happy';
        }

        if (
            lowerText.includes('sad') ||
            lowerText.includes("depressed") ||
            lowerText.includes("unhappy") ||
            lowerText.includes("miserable") ||
            lowerText.includes("miss")
        ) {
            return 'sadness';
        }

        if (
            lowerText.includes('angry') ||
            lowerText.includes("mad") ||
            lowerText.includes("frustrated") ||
            lowerText.includes("annoyed") ||
            lowerText.includes("hate")
        ) {
            return 'anger';
        }
        
        return 'calm';

    } 

    function saveEntry() {
        if (entry.trim() === '') return;

        const NewMemory = {
            id: Date.now(),
            text: entry,
            emotion: detectEmotion(entry),
            x: Math.random() * 90,
            y: Math.random() * 70,
            createdAt: new Date().toLocaleString()
        };

        addMemory(NewMemory);
        setEntry('');
    }

    return (
        <main>
            <section className="page add-page">
                <h1> Plant a Memory </h1>
                <p>
                    Write a thought like you would in a diary.
                    Luminary will turn it into star in your sky.
                </p>
                <br />

                <textarea
                    placeholder="Write your memory here..."
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                />
                <br />
            
                <button onClick={saveEntry} className="primary-button">
                    Plant Star
                </button>
            </section>
        </main>
    );


}
export default AddMemoryPage;