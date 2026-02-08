import React, { useState } from "react";
import "./Dashboard.css";

type DashboardProps = {
  email: string;
};

export default function Dashboard({ email }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "settings">("profile");

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-kicker">FinPlan Dashboard</p>
            <h1>Welcome back</h1>
            <p className="dashboard-subtitle">
              Manage your personal budget, profiles, and preferences.
            </p>
          </div>
          <div className="dashboard-user">
            <div className="dashboard-avatar" aria-hidden="true">
              {email.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="dashboard-user-label">Signed in as</p>
              <p className="dashboard-user-email">{email}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-tabs" role="tablist">
            <button
              className={`dashboard-tab ${
                activeTab === "profile" ? "is-active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            >
              My Profile
            </button>
            <button
              className={`dashboard-tab ${
                activeTab === "settings" ? "is-active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </button>
          </div>

          {activeTab === "profile" ? (
            <div className="dashboard-panel" role="tabpanel">
              <h2>My Profile</h2>
              <p>
                Review your account details and update your personal
                information.
              </p>
              <div className="dashboard-grid">
                <div className="dashboard-tile">
                  <span>Name</span>
                  <strong>FinPlan User</strong>
                </div>
                <div className="dashboard-tile">
                  <span>Email</span>
                  <strong>{email}</strong>
                </div>
                <div className="dashboard-tile">
                  <span>Plan</span>
                  <strong>Personal Budget</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="dashboard-panel" role="tabpanel">
              <h2>Settings</h2>
              <p>Adjust how you track budgets and manage notifications.</p>
              <div className="dashboard-grid">
                <div className="dashboard-tile">
                  <span>Monthly budget alerts</span>
                  <strong>Enabled</strong>
                </div>
                <div className="dashboard-tile">
                  <span>Weekly summary</span>
                  <strong>Every Monday</strong>
                </div>
                <div className="dashboard-tile">
                  <span>Currency</span>
                  <strong>USD</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
