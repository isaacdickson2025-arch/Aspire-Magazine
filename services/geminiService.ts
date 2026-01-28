import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMagazinePreview = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, sophisticated, and engaging magazine excerpt (approx. 80-100 words) about "${topic}". 
      The tone should be aspirational, modern, and culturally relevant, fitting for "ASPIRE Magazine". 
      Focus on innovation and lifestyle. Do not include a title.`,
    });
    
    return response.text || "Explore our latest issue to read more about this topic.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Our editors are currently curating the latest trends. Please check back soon or browse our featured issues.";
  }
};