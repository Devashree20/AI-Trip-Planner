import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/trip");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-96 text-white">
        
        <h1 className="text-4xl font-bold text-center mb-2">
          ✈️ AI Trip Planner
        </h1>

        <p className="text-center text-sm mb-8 opacity-80">
          Plan smarter. Travel better.
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl bg-white/30 placeholder-white outline-none"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-xl bg-white/30 placeholder-white outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-white text-purple-700 font-semibold p-3 rounded-xl hover:scale-105 transition duration-300"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
