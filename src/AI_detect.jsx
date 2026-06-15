import OpenAI from 'openai';

export function detectEmotion(text) {
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
    return text;

}

