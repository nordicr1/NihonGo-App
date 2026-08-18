import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", aiEnabled: Boolean(process.env.GEMINI_API_KEY) });
});

// AI Japanese Sensei Assistant endpoint
app.post("/api/sensei/chat", async (req, res) => {
  try {
    const { message, history = [], currentLevel = "N5" } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Mensagem obrigatória" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        reply: `Sensei Offline: Adicione a chave GEMINI_API_KEY nas configurações para ativar o Sensei IA completo! Enquanto isso, aproveite o vasto banco de dados didático local com JLPT N5 a N1, Kanjis, Kanas e Minigames.`,
        offline: true,
      });
    }

    const systemInstruction = `Você é o "Sensei Kenji", um professor nativo e carinhoso especialista em ensinar Japonês para falantes de Português Brasileiro (PT-BR).
O nível atual do estudante é JLPT ${currentLevel}.
Diretrizes:
- Responda sempre em Português do Brasil com explicações didáticas, claras e encorajadoras.
- Sempre que citar palavras ou frases em japonês, forneça: Japonês (Kanji/Kana) + Furigana/Romaji + Tradução em Português.
- Explique pontos gramaticais, nuances culturais e dicas práticas para os testes do JLPT (N5 ao N1).
- Mantenha o formato agradável com tópicos, negritos e destaques visuais quando apropriado.
- Se o usuário pedir para corrigir uma frase, aponte os erros gentilmente e sugira alternativas naturais no dia a dia japonês.`;

    const chatContents = [
      ...history.map((h: { role: string; content: string }) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.content }],
      })),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: chatContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Desculpe, não consegui processar a resposta.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Sensei chat error:", error);
    return res.status(500).json({
      error: "Falha ao consultar o Sensei IA",
      details: error.message,
    });
  }
});

// Analyze Japanese Sentence endpoint
app.post("/api/sensei/analyze-sentence", async (req, res) => {
  try {
    const { sentence } = req.body;
    if (!sentence) {
      return res.status(400).json({ error: "Frase não informada" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        original: sentence,
        translation: "Configure a API Key para análise morfológica profunda com IA.",
        breakdown: [
          { token: sentence, reading: "", type: "Texto", meaning: "Análise IA offline" }
        ],
        grammarNotes: "Ative a chave Gemini no menu para obter análise morfológica completa.",
      });
    }

    const prompt = `Analise a seguinte frase em japonês para um estudante brasileiro de japonês:
"${sentence}"

Retorne estritamente um objeto JSON com o formato:
{
  "original": "${sentence}",
  "romaji": "romaji completo",
  "translation": "Tradução natural em Português Brasileiro",
  "literalTranslation": "Tradução literal termo a termo em Português",
  "jlptLevel": "N5/N4/N3/N2/N1 estimado",
  "breakdown": [
    {
      "token": "palavra/kanji/partícula",
      "reading": "hiragana",
      "romaji": "romaji",
      "type": "Substantivo / Verbo (Grupo 1) / Partícula / Adjetivo-i / etc",
      "meaning": "significado em português"
    }
  ],
  "grammarNotes": "Explicação detalhada da estrutura gramatical e partículas usadas nesta frase em português.",
  "culturalNote": "Alguma nuance cultural ou de formalidade (polidez teinei, informal futsuu, sonkeigo, etc)."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed);
  } catch (error: any) {
    console.error("Sentence analysis error:", error);
    return res.status(500).json({ error: "Erro ao analisar frase", details: error.message });
  }
});

// Dynamic AI JLPT Quiz Generator
app.post("/api/sensei/generate-quiz", async (req, res) => {
  try {
    const { level = "N5", topic = "geral", count = 3 } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({ error: "Gemini API não configurada" });
    }

    const prompt = `Gere ${count} questões de teste didáticas para estudo de Japonês nível JLPT ${level} com foco em "${topic}".
O público-alvo são falantes de Português Brasileiro.
Retorne estritamente um array JSON com objetos no formato:
[
  {
    "id": "q1",
    "level": "${level}",
    "category": "Gramática / Vocabulário / Kanji / Partículas",
    "question": "Texto da pergunta em Japonês e/ou Português com lacuna (ex: わたし ___ 田中 です。)",
    "questionRomaji": "leitura em romaji da pergunta",
    "questionPt": "Tradução ou instrução em Português",
    "options": ["は", "が", "を", "に"],
    "correctIndex": 0,
    "explanation": "Explicação clara e detalhada em Português do porquê a alternativa é a correta e porque as outras não cabem."
  }
]`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.3,
      },
    });

    const questions = JSON.parse(response.text || "[]");
    return res.json({ questions });
  } catch (error: any) {
    console.error("Quiz generator error:", error);
    return res.status(500).json({ error: "Erro ao gerar quiz", details: error.message });
  }
});

export default app;
