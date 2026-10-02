import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    travel_with: "",
    interests: []
  });

  const handleInterest = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      interests: form.interests.includes(value)
        ? form.interests.filter(i => i !== value)
        : [...form.interests, value]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/register", form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <input placeholder="Age" onChange={e=>setForm({...form,age:e.target.value})}/>
      
      <select onChange={e=>setForm({...form,travel_with:e.target.value})}>
        <option value="">Travel With</option>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Partner">Partner</option>
        <option value="Solo">Solo</option>
      </select>

      <div>
        <label><input type="checkbox" value="Adventure" onChange={handleInterest}/>Adventure</label>
        <label><input type="checkbox" value="Food" onChange={handleInterest}/>Food</label>
        <label><input type="checkbox" value="History" onChange={handleInterest}/>History</label>
        <label><input type="checkbox" value="Nature" onChange={handleInterest}/>Nature</label>
      </div>

      <button>Register</button>
    </form>
  );
}

export default Register;
