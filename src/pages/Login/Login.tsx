import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

type LoginProps = {
  onSignIn: (email: string) => void;
};

export default function Login({ onSignIn }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const canSubmit = email.trim().length > 0 && password.trim().length > 0;

  return (
    <div className="login-page">
      <div className="login-card" role="region" aria-label="FinPlan login">
        <div className="login-brand">
          <div className="login-brand-icon" aria-hidden="true">
            <span />
          </div>
          <span className="login-brand-name">FinPlan</span>
        </div>

        <h1 className="login-title">Welcome to FinPlan</h1>
        <p className="login-subtitle">
          A personal budget manager to plan spending, track income, and stay in
          control of your finances.
        </p>

        <div className="login-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="login-field">
          <label htmlFor="password">Password</label>
          <div className="login-input-wrap">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="login-toggle"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="login-forgot">
          <button type="button">Forgot password?</button>
        </div>

        <button
          className="login-primary"
          type="button"
          disabled={!canSubmit}
          onClick={() => {
            if (!canSubmit) return;
            onSignIn(email.trim());
            navigate("/dashboard");
          }}
        >
          Sign In <span aria-hidden="true">→</span>
        </button>

        <div className="login-divider">
          <span>Or continue with</span>
        </div>

        <button className="login-secondary" type="button">
          <span className="login-google-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
              <path
                fill="#FFC107"
                d="M43.6 20.4H42V20H24v8h11.3C33.9 32.5 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.9 6.1 29.7 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 20-8.9 20-20 0-1.3-.1-2.2-.4-3.6z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.9 6.1 29.7 4 24 4 16.3 4 9.6 8.1 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.3 0 10.1-2 13.8-5.3l-6.4-5.2C29.4 35.7 26.8 36 24 36c-5.4 0-9.9-3.5-11.5-8.3l-6.6 5.1C9.2 39.7 16.1 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.4H42V20H24v8h11.3c-1.2 3-3.6 5.4-6.7 6.7l6.4 5.2C38.6 36.9 44 31.6 44 24c0-1.3-.1-2.2-.4-3.6z"
              />
            </svg>
          </span>
          Google
        </button>

          <p className="login-footer">
          Don&apos;t have an account?{" "}
          <button type="button" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
