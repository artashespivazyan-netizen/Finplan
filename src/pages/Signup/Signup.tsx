import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    dob: "",
    gender: "",
    country: "",
    email: "",
    phone: "",
    province: "",
    city: "",
  });
  const [emailTouched, setEmailTouched] = React.useState(false);
  const [emailFocused, setEmailFocused] = React.useState(false);

  const provinceCities: Record<string, string[]> = {
    Aragatsotn: ["Ashtarak", "Talin"],
    Ararat: ["Artashat", "Masis", "Ararat"],
    Armavir: ["Vagharshapat", "Armavir"],
    Gegharkunik: ["Sevan", "Gavar", "Vardenis", "Martuni"],
    Kotayk: ["Abovyan", "Hrazdan", "Charentsavan", "Yeghvard", "Tsaghkadzor"],
    Lori: ["Vanadzor", "Alaverdi", "Stepanavan", "Spitak", "Tumanyan"],
    Shirak: ["Gyumri", "Artik"],
    Syunik: ["Kapan", "Goris", "Sisian", "Kajaran"],
    Tavush: ["Ijevan", "Dilijan", "Berd", "Ayrum"],
    "Vayots Dzor": ["Yeghegnadzor", "Jermuk", "Vayk"],
    Yerevan: ["Yerevan city itself"],
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid =
    !formValues.email.trim() || emailPattern.test(formValues.email.trim());

  const cityOptions = formValues.province
    ? provinceCities[formValues.province] ?? []
    : [];

  const handleChange =
    (field: keyof typeof formValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;
      setFormValues((prev) => {
        if (field === "province") {
          return { ...prev, province: nextValue, city: "" };
        }
        return { ...prev, [field]: nextValue };
      });
    };

  const requiredFilled = Boolean(
    formValues.fullName.trim() &&
      formValues.dob &&
      formValues.country &&
      formValues.email.trim() &&
      emailPattern.test(formValues.email.trim()) &&
      formValues.phone.trim()
  );

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
              <span className="signup-label">
                Full name
                <span className="signup-required" aria-hidden="true">
                  *
                </span>
              </span>
              <span className="sr-only">required</span>
              <input
                type="text"
                placeholder="First and last name"
                value={formValues.fullName}
                onChange={handleChange("fullName")}
                required
              />
            </label>
            <label className="signup-field">
              <span className="signup-label">
                Date of birth
                <span className="signup-required" aria-hidden="true">
                  *
                </span>
              </span>
              <span className="sr-only">required</span>
              <input
                type="date"
                value={formValues.dob}
                onChange={handleChange("dob")}
                onClick={(event) => {
                  const target = event.currentTarget as HTMLInputElement & {
                    showPicker?: () => void;
                  };
                  target.showPicker?.();
                }}
                required
              />
            </label>
            <div className="signup-field">
              <span>Gender</span>
              <div className="signup-radio-group">
                <label className="signup-radio">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formValues.gender === "female"}
                    onChange={handleChange("gender")}
                  />
                  Female
                </label>
                <label className="signup-radio">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formValues.gender === "male"}
                    onChange={handleChange("gender")}
                  />
                  Male
                </label>
              </div>
            </div>
            <label className="signup-field">
              <span className="signup-label">
                Country of residence
                <span className="signup-required" aria-hidden="true">
                  *
                </span>
              </span>
              <span className="sr-only">required</span>
              <select
                value={formValues.country}
                onChange={handleChange("country")}
                required
              >
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
              <span className="signup-label">
                Email address
                <span className="signup-required" aria-hidden="true">
                  *
                </span>
              </span>
              <span className="sr-only">required</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={formValues.email}
                onChange={handleChange("email")}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => {
                  setEmailFocused(false);
                  setEmailTouched(true);
                }}
                pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                required
              />
              {emailTouched && !emailFocused && !emailValid && (
                <span className="signup-error">
                  Enter a valid email address.
                </span>
              )}
            </label>
            <label className="signup-field">
              <span className="signup-label">
                Phone number
                <span className="signup-required" aria-hidden="true">
                  *
                </span>
              </span>
              <span className="sr-only">required</span>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formValues.phone}
                onChange={handleChange("phone")}
                required
              />
            </label>
          </div>
        </div>

        <div className="signup-section">
          <h2>Address Information</h2>
          <div className="signup-grid">
            <label className="signup-field signup-field--full">
              Province
              <select
                value={formValues.province}
                onChange={handleChange("province")}
              >
                <option value="" disabled>
                  Select province
                </option>
                <option>Aragatsotn</option>
                <option>Ararat</option>
                <option>Armavir</option>
                <option>Gegharkunik</option>
                <option>Kotayk</option>
                <option>Lori</option>
                <option>Shirak</option>
                <option>Syunik</option>
                <option>Vayots Dzor</option>
                <option>Tavush</option>
                <option>Yerevan</option>
              </select>
            </label>
            <label className="signup-field signup-field--full">
              City
              <select
                value={formValues.city}
                onChange={handleChange("city")}
                disabled={!formValues.province}
              >
                <option value="" disabled>
                  {formValues.province ? "Select city" : "Select province first"}
                </option>
                {cityOptions.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {!requiredFilled && (
          <p className="signup-hint" role="note">
            Create account becomes clickable once all required fields are
            filled.
          </p>
        )}
        <button
          className="signup-primary"
          type="button"
          onClick={() => {
            if (requiredFilled) {
              navigate("/dashboard");
            }
          }}
          disabled={!requiredFilled}
        >
          Create account
        </button>
      </div>
    </div>
  );
}
