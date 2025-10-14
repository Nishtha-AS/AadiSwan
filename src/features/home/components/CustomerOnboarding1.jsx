import React from 'react';
import customerOnboardinggif from '../../../assets/Customer Onboarding.gif';
import './CustomerOnboarding1.css';

const CustomerOnboarding1 = () => {
  return (
    <div className="customer-onboarding-container">
      <img
        src={customerOnboardinggif}
        className="customer-onboarding-image"
      />
    </div>
  );
};

export default CustomerOnboarding1;
