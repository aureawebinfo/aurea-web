import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
console.log("API KEY:", GEMINI_API_KEY);


app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Aquí configuramos la personalidad de Aura
    const prompt = `
      Eres Aura, la asistente virtual experta de Áurea Web.
      Tu tono es elegante, profesional y tecnológico.
      Responde de forma concisa (max 3 oraciones).
      Usuario dice: ${message}
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );

    const data = await response.json();

    console.log("Gemini full response:", data);
    
if (!response.ok) {
  console.error("Gemini error:", data);
}

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No pude conectar con mis servidores.";

    res.json({ reply: aiText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error interno en Aura AI." });
  }
});

app.listen(3001, () => console.log("🧠 Cerebro de Aura activo en puerto 3001"));