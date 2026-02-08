import React from "react";
import "./Deposits.css";

export default function Deposits() {
  return (
    <div className="deposits-page">
      <div className="deposits-card" role="region" aria-label="Deposits info">
        <h1>Deposits</h1>
        <p>
          A deposit is money you put into a bank or financial institution to
          keep it safe and (usually) earn interest.
        </p>

        <h2>Deposit (simple explanation)</h2>
        <p>When you make a deposit:</p>
        <ul>
          <li>You give your money to a bank.</li>
          <li>The bank keeps it safe.</li>
          <li>
            The bank pays you interest (extra money) for using your money.
          </li>
          <li>
            Over time, your deposited money can grow, even if you don&apos;t add
            more.
          </li>
        </ul>

        <h2>Common types of deposits</h2>
        <h3>Savings deposit</h3>
        <ul>
          <li>Money you can withdraw anytime.</li>
          <li>Lower interest.</li>
          <li>Good for emergencies.</li>
        </ul>

        <h3>Term deposit (fixed deposit)</h3>
        <ul>
          <li>Money locked for a set period (e.g., 6 months, 1 year).</li>
          <li>Higher interest.</li>
          <li>Early withdrawal may have penalties.</li>
        </ul>

        <h3>Recurring deposit</h3>
        <ul>
          <li>
            Deposit a fixed amount regularly (monthly or weekly) for a set
            period.
          </li>
          <li>Helps build savings gradually.</li>
          <li>Earns interest similar to a fixed deposit.</li>
        </ul>

        <h3>Current account deposit</h3>
        <ul>
          <li>Mainly for businesses or frequent transactions.</li>
          <li>Allows unlimited deposits and withdrawals.</li>
          <li>Usually earns little or no interest.</li>
        </ul>

        <h3>Special deposits</h3>
        <ul>
          <li>
            Structured or promotional deposits with different rates or
            conditions.
          </li>
          <li>
            Examples include tax-saving deposits or high-yield deposits.
          </li>
        </ul>

        <h2>Why deposits are popular</h2>
        <ul>
          <li>Very low risk.</li>
          <li>Easy to understand.</li>
          <li>Often protected by deposit insurance.</li>
          <li>Good for beginners and short-term goals.</li>
        </ul>

        <h2>Things to remember</h2>
        <ul>
          <li>Returns are usually low.</li>
          <li>Inflation can reduce real value.</li>
          <li>Best for safety, not fast growth.</li>
        </ul>

        <h2>In one sentence</h2>
        <p>
          A deposit is a safe way to store money in a bank and earn a small,
          predictable return.
        </p>
      </div>
    </div>
  );
}
