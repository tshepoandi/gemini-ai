import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API);

export async function sendPromptController(req, res) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "translate this to english (if it is not in english) and provide a detailed analysis. 1. Translate the lyrics to English (if necessary).2. Identify and explain the figures of speech and literary devices used in the lyrics, including their meanings.3. Offer a critical opinion on the song as a world-renowned music reviewer, rap and literature expert, and storyteller. 4. List links to reference material for further reading on the themes, cultural context, and literary analysis of the song:" + req.body.prompt;

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = await response.text()
        console.log(text)
        res.status(200).json({ generateText: text });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}