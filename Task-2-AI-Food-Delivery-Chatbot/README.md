# 🤖 OrderBuddy – AI-Powered Food Delivery Chatbot

AI-powered conversational assistant for food delivery support, built using TF-IDF vectorization and cosine similarity, deployed with a Flask web application for real-time user interaction.

---

## 🌐 Live Demo

[**Try OrderBuddy here**](https://ai-food-delivery-chatbot.onrender.com)

*Hosted on a free tier — first load may take 30–50 seconds if the app has been idle.*

---

## 📌 Overview

OrderBuddy is an intelligent food delivery support chatbot designed to handle user queries related to orders, refunds, payments, delivery status, coupons, and account management.

It uses classical NLP techniques (TF-IDF + Cosine Similarity) to understand user input and return the most relevant response from predefined intents.

---

## 🛠️ Tech Stack

![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-3.x-black?logo=flask)
![scikit-learn](https://img.shields.io/badge/scikit--learn-NLP-orange?logo=scikit-learn)
![License](https://img.shields.io/badge/License-MIT-green)

| Layer | Technology |
|---|---|
| NLP Engine | Python, scikit-learn (TF-IDF + Cosine Similarity) |
| Backend | Flask |
| Frontend | HTML, CSS, JavaScript |
| Fonts | Cormorant Garamond + Karla (Google Fonts) |
| Dataset | Custom `intents.json` (20 intents, 400+ patterns) |

---

## 🎯 What It Does

Users are welcomed by an animated robot concierge, then enter a premium chat interface to ask natural language questions about their food orders and get instant, relevant answers.

| Topic | Example Query |
|---|---|
| 📦 Order Tracking | "Where is my order?" |
| ❌ Cancellations | "How do I cancel my order?" |
| 💰 Refunds | "When will I get my refund?" |
| 💳 Payments | "My payment failed, what now?" |
| 🏷️ Coupons | "Do you have any discount codes?" |
| 🚚 Delivery Issues | "My delivery is late" |
| 👤 Account Help | "How do I reset my password?" |

---

## ✨ UI Highlights

- 🤖 **Animated robot greeter** with glowing eyes, blinking antenna, cheek glow, and hand-drawn smile animation
- 🍕 **Floating food emojis** (🍕🍔🍣🥑🍜) drifting across the background
- 💬 **Premium chat interface** with parchment-style message bubbles and brass accent colors
- ⚡ **Smooth transitions** — robot fades out, chat UI animates in
- 📱 **Fully responsive** — works on desktop and mobile
- ♿ **Accessibility-ready** — reduced motion support, keyboard navigation, ARIA live regions

---

## 🚀 Features

- 💬 Natural language understanding via classical NLP
- 🎯 Confidence threshold — avoids wrong answers by falling back gracefully
- ⚡ Lightweight and fast — no GPU, no API keys, no internet dependency
- 🌐 Flask REST API backend
- 🖥️ Premium responsive web UI (works on mobile too)
- 🔒 XSS-safe message rendering
- 💡 Quick-reply chips for common questions
- ⌨️ Enter key support for sending messages

---

## 🧠 How It Works
User Message → Text Preprocessing → TF-IDF Vectorization
→ Cosine Similarity Match → Confidence Check → Response

1. User enters a message in the chat interface
2. Text is cleaned and normalized (lowercased, punctuation stripped)
3. TF-IDF converts text into numerical feature vectors
4. Cosine similarity computed against 400+ stored intent patterns
5. Confidence threshold filters low-quality matches → fallback response
6. Best matching intent selected → response returned from `intents.json`

> Text preprocessing is handled via custom Python regex and a curated stopword list. TF-IDF vectorization and cosine similarity are implemented via **scikit-learn** — a more suitable approach for FAQ intent matching than NLTK's tokenization utilities.

---

## 📁 Project Structure
```
ai-food-delivery-chatbot/
│
├── app.py               # Flask backend & API routes
├── chatbot.py           # NLP engine (TF-IDF + cosine similarity)
├── intents.json         # Intent dataset (patterns & responses)
├── requirements.txt     # Dependencies
│
├── templates/
│   └── index.html       # Animated robot greeter + chat UI
│
└── static/
├── style.css         # All styling + animations
└── script.js         # Robot interaction + chat logic
```
---

## ⚙️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/kajalmishra1/ai-food-delivery-chatbot.git
cd ai-food-delivery-chatbot

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the app
python app.py

# 4. Open in browser
http://127.0.0.1:5000
```

---

## 📌 Future Improvements

- 🔥 Add deep learning / transformer-based NLP model
- 🎤 Voice-based chatbot interaction
- 📊 Analytics dashboard for user queries
- ☁️ Deploy on cloud (Render / AWS / Railway)

---

## 👨‍💻 About the Project

This project demonstrates end-to-end development of an NLP-powered chatbot — from intent design and text vectorization to REST API deployment and a production-styled animated web UI.

Designed as a portfolio project showcasing practical machine learning, backend development, and frontend design skills.

---

## 📄 License

This project is open-source and available for learning and educational purposes.

---

## ✨ Author

**Kajal Mishra**
<br>
⭐ If you found this useful, consider starring the repo!
