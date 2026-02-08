import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup/Signup";
import Deposits from "./pages/Deposits/Deposits";
import Funds from "./pages/Funds/Funds";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
              path="/login"
              element={<Login onSignIn={(email) => setUserEmail(email)} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/funds" element={<Funds />} />
            <Route
              path="/dashboard"
              element={
                userEmail ? (
                  <Dashboard email={userEmail} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
