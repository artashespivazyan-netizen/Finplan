import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <div className="signup-card" role="region" aria-label="FinPlan signup">
        <div className="signup-header">
          <div>
            <p className="signup-kicker">Create your account</p>
            <h1>Sign up for FinPlan</h1>
            <p className="signup-subtitle">
              Tell us about yourself so we can personalize your budget
              experience.
            </p>
          </div>
          <button
            className="signup-back"
            type="button"
            onClick={() => navigate("/login")}
          >
            Back to login
          </button>
        </div>

        <div className="signup-section">
          <h2>Basic Personal Information</h2>
          <div className="signup-grid">
            <label className="signup-field">
              Full name
              <input type="text" placeholder="First and last name" />
            </label>
            <label className="signup-field">
              Date of birth
              <input type="date" />
            </label>
            <div className="signup-field">
              <span>Gender (optional)</span>
              <div className="signup-radio-group">
                <label className="signup-radio">
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
                <label className="signup-radio">
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
              </div>
            </div>
            <label className="signup-field">
              Country of residence
              <select defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Armenia</option>
                <option>Georgia</option>
                <option>Russia</option>
                <option>France</option>
                <option>Spain</option>
                <option>Belgium</option>
                <option>United States</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
              </select>
            </label>
          </div>
        </div>

        <div className="signup-section">
          <h2>Contact Information</h2>
          <div className="signup-grid">
            <label className="signup-field">
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label className="signup-field">
              Phone number
              <input type="tel" placeholder="+1 (555) 123-4567" />
            </label>
            <label className="signup-field signup-field--full">
              Address
              <input type="text" placeholder="Street, city, state, postal code" />
            </label>
          </div>
        </div>

        <button
          className="signup-primary"
          type="button"
          onClick={() => navigate("/dashboard")}
        >
          Create account
        </button>
      </div>
    </div>
  );
}
