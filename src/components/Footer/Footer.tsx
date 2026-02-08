import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-shell">
        <div className="footer-groups">
          <div className="footer-section">
            <h2>Investments</h2>
            <ul>
              <li>
                <Link className="footer-link" to="/deposits">
                  Deposits
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/funds">
                  Funds
                </Link>
              </li>
              <li>Bonds</li>
              <li>Stocks</li>
              <li>Real Estate</li>
              <li>Alternative Investments</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Learn</h2>
            <ul>
              <li>Money Basics</li>
              <li>Budgeting</li>
              <li>Saving Goals</li>
              <li>Debt & Credit</li>
              <li>Risk & Return</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Information</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="footer-language">
          <label htmlFor="app-language">Language</label>
          <select id="app-language" defaultValue="eng">
            <option value="arm">Arm</option>
            <option value="eng">Eng</option>
            <option value="rus">Russian</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
