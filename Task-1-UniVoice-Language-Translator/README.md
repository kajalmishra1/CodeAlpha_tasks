# 🌐 UniVoice — Multilingual Translation Web App

> Translate instantly, connect globally.

**UniVoice** is a modern, full-stack multilingual translation web app — built with React + Vite on the frontend and Node.js + Express on the backend. It supports 70+ languages, voice input, text-to-speech, and a beautiful glassmorphism UI with dark/light mode. Built as part of my **CodeAlpha Internship**.

🔗 **Live Demo:** [uni-voice-five.vercel.app](https://uni-voice-five.vercel.app)
🔗 **Repo:** [github.com/kajalmishra1/CodeAlpha_tasks/tree/main/Task-1-UniVoice-Language-Translator](https://github.com/kajalmishra1/CodeAlpha_tasks/tree/main/Task-1-UniVoice-Language-Translator)
---

## ✨ Features

- 🌍 **70+ Languages** — Translate between 70+ languages with a searchable dropdown
- ⚡ **Auto Language Detection** — Detects the source language automatically
- 🎤 **Voice Input** — Speak your text using the Web Speech API
- 🔊 **Text-to-Speech** — Listen to the translated text in the target language
- 💬 **Quick Phrases** — One-click common phrases for fast translation
- 📋 **Copy Button** — Copy translation to clipboard instantly
- 🕐 **Translation History** — View and reuse past translations
- 🌙 **Dark / Light Mode** — Premium glassmorphism design in both themes
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- ✍️ **Typing Animation** — Smooth character-by-character output effect
- 🔄 **Shimmer Loading** — Beautiful skeleton loader while translating

---

## 🛠️ Tech Stack

**Frontend**

| Technology | Purpose |
|---|---|
| React 18 | Frontend UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Router DOM | Client-side routing |
| Axios | HTTP requests to backend |
| Web Speech API | Voice input & text-to-speech |
| Vercel | Frontend deployment |

**Backend**

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| Axios | HTTP client for API requests |
| CORS | Cross-origin resource sharing |
| dotenv | Environment variable management |
| Deep Translate API | Translation provider (RapidAPI) |
| Render | Backend deployment |

---

## 📁 Project Structure

This is a **monorepo** — frontend and backend live together in one repository.

```
CodeAlpha_UniVoice/
├── frontend/
│   ├── public/
│   │   └── frontpic.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Background.jsx       # Animated background bubbles & blobs
│   │   │   ├── HistoryPanel.jsx     # Slide-in translation history panel
│   │   │   ├── LangSelector.jsx     # Language dropdown with search
│   │   │   └── TranslatorCard.jsx   # Main translator UI component
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing/welcome page
│   │   │   └── TranslatePage.jsx    # Translator page
│   │   ├── App.jsx                  # Root component with routing
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── server.js        # Main Express server & API routes
│   ├── .env.example     # Environment variable template
│   ├── .gitignore       # Ignores node_modules & .env
│   └── package.json     # Dependencies & scripts
│
└── README.md
```

> **Note:** If your folder names differ (e.g. `client`/`server` instead of `frontend`/`backend`), update the paths in the commands below to match.

---

## 🔌 API Reference

### Health Check
```http
GET /
```
**Response:**
```json
{
  "status": "ok",
  "service": "UniVoice Backend"
}
```

### Translate Text
```http
POST /api/translate
```

**Request Body:**
```json
{
  "text": "Hello, how are you?",
  "source": "en",
  "target": "hi"
}
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `text` | string | ✅ | Text to translate (max 5000 chars) |
| `source` | string | ❌ | Source language code (default: `auto`) |
| `target` | string | ✅ | Target language code |

**Success Response:**
```json
{
  "translatedText": "नमस्ते, आप कैसे हैं?",
  "detectedLanguage": "en",
  "source": "en",
  "target": "hi"
}
```

**Error Response:**
```json
{
  "error": "Missing 'target' field."
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm
- RapidAPI account (free — for the Deep Translate API key)

### 1. Clone the repo
```bash
git clone https://github.com/kajalmishra1/CodeAlpha_UniVoice.git
cd CodeAlpha_UniVoice
```

### 2. Set up the backend
```bash
cd backend
npm install
cp .env.example .env
```

Add to `.env`:
```env
RAPIDAPI_KEY=your_rapidapi_key_here
ALLOWED_ORIGINS=http://localhost:5173
PORT=5000
```

**Getting your RapidAPI key:**
1. Go to [rapidapi.com](https://rapidapi.com)
2. Search for **"Deep Translate"**
3. Subscribe to the free plan
4. Copy your `X-RapidAPI-Key`

Run it:
```bash
npm run dev   # development (with nodemon)
# or
npm start     # production
```
Backend runs on [http://localhost:5000](http://localhost:5000)

### 3. Set up the frontend
Open a new terminal:
```bash
cd frontend
npm install
cp .env.example .env
```

Add to `.env`:
```env
VITE_API_URL=http://localhost:5000
```

Run it:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment

- **Frontend** → deployed on [Vercel](https://vercel.com) (root directory set to `frontend`)
- **Backend** → deployed on [Render](https://render.com) (root directory set to `backend`)

**Frontend deploy steps:**
1. Import repo to Vercel
2. Set root directory to `frontend`
3. Add environment variable: `VITE_API_URL=your_backend_url`
4. Deploy

**Backend deploy steps:**
1. New Web Service on Render
2. Set root directory to `backend`
3. Set environment variables in the Render dashboard
4. Build command: `npm install`
5. Start command: `node server.js`
6. Deploy

---

## 🔒 Security

- API keys stored as environment variables — never committed to Git
- `.env` listed in `.gitignore`
- CORS restricts requests to allowed frontend origins only
- Input validation on all endpoints

---

## 📸 Screenshots

| Dark Mode | Light Mode |
|---|---|
| ![Dark Mode](https://github.com/kajalmishra1/CodeAlpha_UniVoice/blob/main/Screenshot%202026-07-02%20014020.png?raw=true) | ![Light Mode](https://github.com/kajalmishra1/CodeAlpha_UniVoice/blob/main/Screenshot%202026-07-02%20013949.png?raw=true) |

---

## 🎯 About This Project

UniVoice was built as part of my **CodeAlpha Internship**, with the goal of creating a genuinely useful, production-quality translation tool — complete with real design intent, smooth UX, and a full end-to-end architecture (frontend + backend), deployed live.

---

## 👩‍💻 Author

**Kajal Mishra**
[![GitHub](https://img.shields.io/badge/GitHub-kajalmishra1-black?logo=github)](https://github.com/kajalmishra1)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
