import React from "react";
import "./Funds.css";

export default function Funds() {
  return (
    <div className="funds-page">
      <div className="funds-card" role="region" aria-label="Funds info">
        <h1>Funds</h1>
        <p>
          Funds are a way to invest money together with other people. When you
          put money into a fund, it is managed by professional fund managers who
          invest in stocks, bonds, or other assets.
        </p>
        <p>
          Funds make investing easier for beginners because you don&apos;t have
          to choose individual investments yourself. The returns depend on the
          type of fund and market performance. Some funds are low-risk, like
          bond funds, while others, like stock or equity funds, can give higher
          returns but may be more volatile.
        </p>
        <p>
          Funds are a good way to grow your money over the medium or long term
          while spreading risk across many investments.
        </p>
      </div>
    </div>
  );
}
