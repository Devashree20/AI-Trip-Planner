import os
from crewai import Agent, Task, Crew
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()

def generate_trip(user, destination, days, budget):

    interests = ", ".join(user["interests"])
    travel_with = user["travel_with"]
    age = user["age"]

    # Proper LLM configuration
    llm = ChatOpenAI(
        model="gpt-3.5-turbo",
        temperature=0.7
    )

    planner = Agent(
        role="Personalized Travel Planner",
        goal="Generate customized trip plans",
        backstory="Expert in personalized travel planning",
        llm=llm
    )

    task = Task(
        description=f"""
        Create a {days}-day trip plan for {destination}.
        Budget: {budget}

        User Details:
        Age: {age}
        Traveling with: {travel_with}
        Interests: {interests}

        Include:
        - Day wise itinerary
        - Hotels
        - Food suggestions
        - Budget breakdown
        - Safety tips
        """,
        agent=planner
    )

    crew = Crew(
        agents=[planner],
        tasks=[task]
    )

    result = crew.kickoff()

    return str(result)
