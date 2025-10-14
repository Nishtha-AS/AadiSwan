import React from 'react';
import camproFlowGif from '../../../assets/Campro flow diagram.gif';
import '../styles/InputDesign.css';

const InputDesign = () => {
  return (
    <section className="input-design-section">
      <div className="flow-diagram-container">
        <img
          src={camproFlowGif}
          alt="CredPro flow diagram"
          className="flow-diagram-image"
        />
      </div>
    </section>
  );
};

export default InputDesign;
