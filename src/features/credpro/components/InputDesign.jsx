import React from 'react';
import credproFlowGif from '../../../assets/Credpro flow diagram GIF.gif';
import '../styles/InputDesign.css';

const InputDesign = () => {
  return (
    <section className="input-design-section">
      <div className="flow-diagram-container">
        <img
          src={credproFlowGif}
          alt="CredPro flow diagram"
          className="flow-diagram-image"
        />
      </div>
    </section>
  );
};

export default InputDesign;
