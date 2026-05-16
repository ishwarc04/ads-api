import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

export const geminiResponse = async (ds) => {

    const prompt = `Write a clean, optimal implementation of a ${ds} data structure in C. 
                Return ONLY the raw code. Do not include markdown code blocks, backticks, or explanations.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    const cleanCode = response.text.replace(/```[a-z]*\n?/g, '').replace(/```/g, '').trim();

    return cleanCode;
};