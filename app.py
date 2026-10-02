from flask import Flask, request, jsonify
from flask_cors import CORS
from models import create_user, verify_user, find_user
from trip_engine import generate_trip

app = Flask(__name__)
CORS(app)

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    if find_user(data["email"]):
        return jsonify({"error": "User already exists"}), 400
    create_user(data)
    return jsonify({"message": "Registered successfully"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = verify_user(data["email"], data["password"])
    if user:
        return jsonify({"message": "Login successful"})
    return jsonify({"error": "Invalid credentials"}), 401

@app.route("/generate-trip", methods=["POST"])
def generate_trip_route():
    data = request.json
    user = find_user(data["email"])

    if not user:
        return jsonify({"error": "User not found"}), 404

    trip_plan = generate_trip(
        user,
        data["destination"],
        data["days"],
        data["budget"]
    )

    return jsonify({"trip_plan": trip_plan})

if __name__ == "__main__":
    app.run(debug=True)
