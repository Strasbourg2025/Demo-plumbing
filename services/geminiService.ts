
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (history: { role: 'user' | 'model', text: string }[], currentMessage: string) => {
  try {
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
        systemInstruction: "You are the AI Plumbing Consultant for 'Your Ideal Home'. You help homeowners in Anne Arundel County with plumbing advice, brainstorming bathroom/kitchen system upgrades, explaining tankless water heater benefits, and troubleshooting common issues (with safety disclaimers). You represent Robert's team, focusing on integrity, transparency, and high-end craftsmanship.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I'm having trouble connecting to our system. Please try again or call Robert's team directly for urgent assistance.";
  }
};
