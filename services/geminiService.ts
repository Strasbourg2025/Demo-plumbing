
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key directly from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (history: { role: 'user' | 'model', text: string }[], currentMessage: string) => {
  try {
    // Call generateContent directly with the model and contents as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: currentMessage }] }
      ],
      config: {
        systemInstruction: "You are the AI Design Consultant for Matos Home Improvements. You help users brainstorm home remodeling ideas, estimate project scopes (with a disclaimer that professional quotes are required), and explain construction processes. Be professional, high-end, and helpful. Mention Dallas-specific trends if relevant (e.g., climate considerations).",
        temperature: 0.7,
      },
    });

    // Extract text output using the .text property directly
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I'm having trouble connecting to my design database. Please try again or reach out to our team directly.";
  }
};