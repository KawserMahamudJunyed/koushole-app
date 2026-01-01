# Koushole (কৌশলে) - Study Smarter (পড়া হবে কৌশলে) 🚀

**Koushole** is an adaptive, AI-powered EdTech platform designed for the Bangladeshi curriculum (NCTB) and beyond, merging advanced AI tutoring with gamified learning and official resources.

## ✨ Key Features

### 🧠 AI Tutor Support (Llama 4 Scout)
- **Socratic Teaching**: Guides students to answers rather than giving them away.
- **Bilingual Conversations**: Seamlessly switches between **English** and **Bangla**, explaining complex concepts in Bangla while keeping technical terms in English.
- **Voice Interaction**: Ask questions using voice (speech-to-text input available).
- **Visual Learning**: Generates educational diagrams and illustrations on demand (powered by **FLUX.1-schnell**).
- **Context Awareness**: Remembers chat history and personalization (weaknesses, class, group).

### 📚 Expanded Library & Syllabus
- **Personal Uploads**: Upload PDF, EPUB, or TXT study materials for custom quiz generation.
- **Official Resources (NCTB)**: Access official NCTB textbooks (Class 6-12) directly within the app.
- **Instant Processing**: Books are immediately indexed for "Chat with Book" and quiz generation.

### 📝 Adaptive Quiz System
- **Pure AI Generation**: Quizzes are generated dynamically by AI from JSON schemas (no static question banks).
- **Multiple Formats**:
  - **MCQ**: Standard multiple-choice questions.
  - **Fill-in-the-gap**: Test precise knowledge recall.
  - **Matching**: Connect concepts with their definitions.
  - **Ordering**: Arrange processes or chronologies correctly.
  - **Voice Answers**: Answer orally for language or definition checks.
- **Remedial Learning**: Integrated **Khan Academy** "Watch Lesson" buttons for incorrect answers.

### 🎓 Expanded User Support
- **University Level**: Dedicated support for University students with Department selection (CSE, EEE, Medical, etc.).
- **Localized Content**: Full support for Bangla and English medium curriculums.

### 🎮 Gamification & Stats
- **XP System**: Earn XP for every correct answer.
- **Streaks**: Daily tracking to build study habits.
- **Badges**: Earn achievements like "Week Warrior", "Topic Master", and "Perfect Score".
- **Dynamic Chart**: Visual graph of learning velocity (XP over time).
- **Weakness Tracking**: AI identifies and tracks weak topics for focused review.

### 🌏 Localization & UI
- **Fully Bilingual Interface**: Toggle entire app between English and Bangla.
- **Dark Mode**: Eye-friendly dark interface.
- **Responsive Design**: Optimized for desktop, tablet, and mobile.

---

## 🏗️ AI Usage & Architecture

### 1. The "Socratic" Chat Tutor 🗣️
**Flow:** Student Input $\rightarrow$ Orchestrator $\rightarrow$ **Llama 4 Scout (Groq)** $\rightarrow$ Adaptive Output.
*   **Role**: Acts as a patient tutor, using "Peak-to-Bottom" reasoning to explain concepts without solving them directly.

### 2. "Pure AI" Quiz Generator 🧠
**Flow:** Topic Selection $\rightarrow$ AI Prompt Engineering $\rightarrow$ **Llama 4 Scout** $\rightarrow$ JSON Structure $\rightarrow$ Frontend Quiz.
*   **Role**: Creates unlimited, unique quizzes on any topic instantly.

### 3. "Diagram" Image Generator 🎨
**Flow:** "Draw me..." Intent $\rightarrow$ Prompt Refinement $\rightarrow$ **FLUX.1 (Hugging Face)** $\rightarrow$ Image Display.
*   **Role**: Visualizes concepts (e.g., "Draw a plant cell") on demand.

---

## 🛠️ Tech Stack
- **Frontend**: Vanilla JS, HTML5, Tailwind CSS, FontAwesome.
- **Backend/DB**: Supabase (Auth, Database, Storage, RLS Security).
- **AI Inference**: 
  - Text/Logic: **Llama 4 Scout** (via Groq API).
  - Vision: **FLUX.1-schnell** (via Hugging Face API).
- **Hosting**: Vercel Serverless Functions.

---

*Powered by Team Tensorithm*
