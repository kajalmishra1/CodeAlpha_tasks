require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
    : ["http://localhost:5173"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        callback(new Error(`CORS: origin ${origin} not allowed`));
    },
}));

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

if (!RAPIDAPI_KEY) {
    console.error("\n[ERROR] RAPIDAPI_KEY is not set in .env file\n");
    process.exit(1);
}

// Health check
app.get("/", (req, res) => {
    res.json({ status: "ok", service: "UniVoice Backend" });
});

// POST /api/translate
app.post("/api/translate", async (req, res) => {
    const { text, source = "auto", target } = req.body;

    if (!text || typeof text !== "string" || !text.trim()) {
        return res.status(400).json({ error: "Missing or empty 'text' field." });
    }
    if (!target) {
        return res.status(400).json({ error: "Missing 'target' field." });
    }
    if (text.length > 5000) {
        return res.status(400).json({ error: "Text too long. Max 5000 characters." });
    }

    try {
        const response = await axios.post(
            "https://deep-translate1.p.rapidapi.com/language/translate/v2",
            {
                q: text,
                source: source === "auto" ? "en" : source,
                target: target,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-RapidAPI-Key": RAPIDAPI_KEY,
                    "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
                },
                timeout: 10000,
            }
        );

        const translatedText = response.data?.data?.translations?.translatedText?.[0];

        if (!translatedText) {
            return res.status(502).json({ error: "No translation returned." });
        }

        return res.json({
            translatedText,
            detectedLanguage: source === "auto" ? "en" : null,
            source,
            target,
        });

    } catch (err) {
        const apiError = err.response?.data?.message || null;
        console.error("[Translation error]", apiError || err.message);

        if (err.response?.status === 401 || err.response?.status === 403) {
            return res.status(401).json({ error: "Invalid RapidAPI key." });
        }
        if (err.response?.status === 429) {
            return res.status(429).json({ error: "Rate limit hit. Try again shortly." });
        }

        return res.status(500).json({
            error: apiError || "Translation failed.",
        });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
    console.log(`\n✅ UniVoice backend running on http://localhost:${PORT}`);
    console.log(`   Using: Deep Translate (RapidAPI)`);
    console.log(`   Key: ${RAPIDAPI_KEY.slice(0, 6)}${"*".repeat(20)}\n`);
});