import React, { useState } from "react";
import { authService } from "fbInstance";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [loginError, setLoginError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") setEmail(value);

    if (name === "password") setPassword(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newAccount) {
      await authService
        .createUserWithEmailAndPassword(authService.getAuth(), email, password)
        .catch((error) => {
          setLoginError(error.message);
        });
    } else {
      await authService
        .signInWithEmailAndPassword(authService.getAuth(), email, password)
        .catch((error) => {
          setLoginError(error.message);
        });
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
    setLoginError("");
  };

  const onSocialLogin = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new authService.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new authService.GithubAuthProvider();
    }
    await authService.signInWithPopup(authService.getAuth(), provider);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={onChange}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        ></input>
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign in"}
          required
        ></input>
        {loginError}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"}
      </span>
      <div>
        <button onClick={onSocialLogin} name="google">
          continue with Google
        </button>
        <button onClick={onSocialLogin} name="github">
          continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
