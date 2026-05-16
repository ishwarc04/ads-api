import { geminiResponse } from "../services/apiService.js";
import fs from 'fs/promises';

export const homePage = (req, res) => {
    res.send('Now running with ES Modules!');
};

export const getADS = async (req, res) => {
    const item = req.params.item.toLowerCase();

    try {
        const fileData = await fs.readFile('./data.json', 'utf-8');
        const database = JSON.parse(fileData);
        if (!database[item]) {
            return res.status(404).json({ 
                error: `Data structure '${item}' not found in our database.` 
            });
        }
        const snippet = database[item];
        res.type('text/plain').send(snippet);
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Failed to read the database." });
    }
};

export const getGeminiResponse = async (req, res)=>{
    const ds = req.params.ds;

    try {
        const cleanCode = await geminiResponse(ds);
        res.type('text/plain').send(cleanCode);
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to generate code snippet. Please try again." });
    }
};