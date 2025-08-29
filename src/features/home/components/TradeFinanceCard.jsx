import React from 'react';
import './TradeFinanceCard.module.css';

const TradeFinanceCard = () => {
  return (
    <div className="trade-finance-card">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/7a9df0f34c7558d9bd60944b38d717ca53ae56ed?width=182"
        alt="Trade Finance Icon"
        className="trade-finance-icon"
      />
      <div className="trade-finance-label">
        TRADE FINANCE
      </div>
    </div>
  );
};

export default TradeFinanceCard;
