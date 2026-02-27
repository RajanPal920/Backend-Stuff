import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {handleLogin, loading} = useAuth();

  if(loading){
    return <h1>Loading...</h1>
  }

 function handleSubmit(e) {
    e.preventDefault();

     handleLogin(username, password)
     .then(res=>{
          console.log(res);
          navigate("/");
     })
    
  }

  return (
    <main>
      <div className="form-container">
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter username"
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
          Don't have an account? <Link to="/register"> Register here</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default LoginForm;
