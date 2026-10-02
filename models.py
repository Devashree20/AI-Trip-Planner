from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

client = MongoClient("mongodb://localhost:27017/")
db = client["ai_trip_planner_v2"]

users = db["users"]

def create_user(data):
    data["password"] = generate_password_hash(data["password"])
    users.insert_one(data)

def find_user(email):
    return users.find_one({"email": email})

def verify_user(email, password):
    user = find_user(email)
    if user and check_password_hash(user["password"], password):
        return user
    return None
