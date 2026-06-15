import { useState } from 'react';
import Openai from 'openai';



function AddMemoryPage({ addMemory }) {
    const [entry, setEntry] = useState('');

    function detectEmotion(text) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    app.post("/api/detect-emotion", async (req, res) => {
        const { text } = req.body;

        const response = await openai.responses.create({
            model: "gpt-3.5-turbo",
            store: false,
            input: `
            Classify this memory as exactly one emotion:
            happy, sadness, anger, or calm.

            Memory: ${text}

            Return only the emotion.
            `,
        });
        const emotion = response.output_text.trim()
        res.json({emotion});
    });
    }
    
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
            emotion = detectEmotion2(entry);
        }
        catch (error) {
            console.error("Error detecting emotion:", error);
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


};

export default AddMemoryPage
