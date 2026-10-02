# ✈️ AI Trip Planner

A full-stack web app that generates personalized travel itineraries using an AI agent. Instead of giving everyone the same generic plan, it learns who you are and builds a trip around you.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Flask, MongoDB (PyMongo)
- **AI:** CrewAI + OpenAI GPT-3.5-turbo

## How It Works

Imagine Priya, a 24-year-old who loves food and history and usually travels with friends. Here's her journey through the app.

**1. She introduces herself.**
Priya opens the app and registers with her name, email, and password. She also tells the app a bit about herself: her age, who she usually travels with, and what she enjoys, such as food, history, adventure, or nature. Her password is securely hashed, and her profile is saved in MongoDB so she never has to repeat herself.

**2. She logs in.**
The next time she visits, she signs in. The backend checks her password against the stored hash, and once it matches, the app remembers who she is and takes her to the trip planner.

**3. She tells the app where she wants to go.**
On the planning page, Priya types in her destination, the number of days, and her budget. Say it's Goa, 4 days, ₹20,000.

**4. The app remembers her.**
When she hits "Generate Trip", the frontend sends her request to the Flask server. The server looks up her saved profile and combines it with the trip details. Instead of a bare "plan 4 days in Goa", the AI is told: *a 24-year-old traveling with friends, who loves food and history, with ₹20,000 to spend*.

**5. The AI planner gets to work.**
That personalized request goes to a CrewAI agent called the **Personalized Travel Planner**. The agent sends it to OpenAI's GPT model and asks for a day-wise itinerary, hotel suggestions, food recommendations, a budget breakdown, and safety tips.

**6. Priya gets her plan.**
The finished plan travels back through the server to the screen. Priya sees a trip built for her, with heritage spots and local food spots she'd actually enjoy, and costs that fit her budget.

```
React → Flask API → MongoDB (user profile)
                 ↓
          CrewAI Agent → OpenAI GPT → Trip Plan → React
```

## Setup

**Backend**
```bash
cd backend
pip install -r requirements.txt
```
Create `backend/.env`:
```env
OPENAI_API_KEY=your_key_here
```
```bash
python app.py
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

Requires Node.js, Python, and a local MongoDB instance.
