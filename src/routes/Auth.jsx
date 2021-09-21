import React, { useState } from "react";
import { authService } from "fbInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
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
        })
        .then((response) => {
          authService.updateProfile(authService.getAuth().currentUser, {
            displayName: email.split("@")[0],
          });
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
    setEmail("");
    setPassword("");
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
    <>
      <div className="auth-wrapper">
        <div className="auth-container-left">
          <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        </div>
        <div className="auth-container-right">
          <div className="auth-container-right-element">
            <div className="auth-title">
              Let's get in Ywitter{" "}
              <FontAwesomeIcon
                icon={faTwitter}
                className="title-twitter-icon"
                style={{ color: "RGB(45, 155, 240)" }}
              />
            </div>
            <div className="auth-login-form">
              <form onSubmit={onSubmit}>
                <input
                  className="auth-email-input"
                  name="email"
                  type="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={onChange}
                ></input>
                <input
                  className="auth-password-input submit"
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                  value={password}
                  onChange={onChange}
                ></input>
                <br />
                <input
                  className="auth-submit"
                  type="submit"
                  value={newAccount ? "Create Account" : "Sign in"}
                  required
                ></input>
                <br />

                {loginError}
                <div className="auth-toggle" onClick={toggleAccount}>
                  {newAccount ? "Sign in" : "Create Account"}
                </div>
                <br />
              </form>
            </div>
            <div className="auth-login-social">
              <button
                className="social-login-google"
                onClick={onSocialLogin}
                name="google"
              >
                <FontAwesomeIcon icon={faGoogle} /> continue with Google
              </button>
              <button
                className="social-login-google"
                onClick={onSocialLogin}
                name="github"
              >
                <FontAwesomeIcon icon={faGithub} /> continue with Github
              </button>
            </div>
          </div>
        </div>
        <div className="auth-footer">
          Nomad's course (Twitter clone coding) || Lyekwang &copy;{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default Auth;
