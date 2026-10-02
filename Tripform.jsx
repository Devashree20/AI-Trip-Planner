import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TripForm() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [trip, setTrip] = useState("");

  const generateTrip = async () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        alert("User not logged in");
        return;
      }

      const user = JSON.parse(storedUser);

      const res = await axios.post("http://localhost:5000/generate-trip", {
        email: user.email,
        destination: destination,
        days: days,
        budget: budget
      });

      setTrip(res.data.trip_plan);

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      alert("Trip generation failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">

      <div className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-xl">

        <h2 className="text-3xl font-bold text-center mb-6">
          🌍 Plan Your Trip
        </h2>

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-white/30 placeholder-white outline-none"
        />

        <input
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-white/30 placeholder-white outline-none"
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 mb-6 rounded-xl bg-white/30 placeholder-white outline-none"
        />

        <button
          onClick={generateTrip}
          className="w-full bg-white text-purple-700 font-semibold p-3 rounded-xl hover:scale-105 transition duration-300"
        >
          Generate Trip
        </button>

        <button
          onClick={logout}
          className="w-full mt-4 bg-red-500 text-white font-semibold p-3 rounded-xl hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>

        {trip && (
          <div className="mt-6 bg-white/30 p-4 rounded-xl whitespace-pre-wrap">
            {trip}
          </div>
        )}

      </div>
    </div>
  );
}

export default TripForm;
