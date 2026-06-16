import { useState } from 'react';
import { detectEmotion } from '../AI_detect.jsx';



function AddMemoryPage({ addMemory }) {
    const [entry, setEntry] = useState('');
    
    function detectEmotion2(text) {
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

        /* full logic for emotion detection */

        let emotion;
        try {
            emotion = detectEmotion(entry);
        }
        catch (error) {
            console.error("ERROR IN EMOTION DETECTION:", error);
            emotion = detectEmotion2(entry);
        }


        const NewMemory = {
            id: Date.now(),
            text: entry,
            emotion: emotion,
            x: Math.random() * 90,
            y: Math.random() * 70,
            createdAt: new Date().toLocaleString()
        };

        addMemory(NewMemory);
        /* Say that entry is saved */
        alert("Your memory has been planted as a star in your sky! \n You can view it in the 'My Sky' section. \n Thank you for sharing your thoughts with Luminary!");
    
        setEntry('');
       
    }

    return (
        <main>
            <br />
            <br />

            <section className="page add-page">
                <h1> Plant a Memory </h1>
                <br />
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
};

export default AddMemoryPage;
