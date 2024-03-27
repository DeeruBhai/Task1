import React, { useState } from "react";
import { auth } from "../Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = auth.currentUser.email;
  // console.log(user);
  const signin = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser.email;
      console.log(user);
      navigate("/meme.galary");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <form className="form" onSubmit={signin}>
        <input
          type="email"
          placeholder="Email id..."
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Auth;
