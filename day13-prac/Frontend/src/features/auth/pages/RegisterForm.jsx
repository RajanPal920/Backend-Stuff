import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RegisterForm = () => {
  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await handleRegister(username, email, password);
    navigate("/");
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Enter  Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder=" Enter password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Already have an account? <Link to="/login"> Login here</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default RegisterForm;
