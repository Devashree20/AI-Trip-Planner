AI Trip Planner

A full-stack web app that generates personalized travel itineraries using an AI agent. Users sign up with their preferences, enter a destination, days, and budget, and get a complete plan with itinerary, hotels, food, budget breakdown, and safety tips.

Tech Stack
Frontend: React, Vite, Tailwind CSS, Axios
Backend: Flask, MongoDB (PyMongo)
AI: CrewAI + OpenAI GPT-3.5-turbo
Workflow
Register: the user enters name, email, password, age, who they travel with, and interests. The password is hashed and the profile is saved in MongoDB.
Login: the credentials are verified and the user is taken to the trip page.
Trip request: the user enters a destination, number of days, and budget.
Personalization: the backend fetches the user's profile (age, travel companions, interests) and combines it with the trip details into a prompt.
AI generation: a CrewAI agent (Personalized Travel Planner) sends the prompt to OpenAI GPT-3.5-turbo.
Result: the generated plan, with a day-wise itinerary, hotels, food suggestions, budget breakdown, and safety tips, is shown to the user.
React → Flask API → MongoDB (user profile)
                 ↓
          CrewAI Agent → OpenAI GPT → Trip Plan → React
Setup

Backend

bash
cd backend
pip install -r requirements.txt

Create backend/.env:

env
OPENAI_API_KEY=your_key_here
bash
python app.py

Frontend

bash
cd frontend
npm install
npm run dev

Requires Node.js, Python, and a local MongoDB instance.
