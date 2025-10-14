import React from 'react';
import cadproFlowGif from '../../../assets/CADPro Flow Diagram GIF.gif';
import '../styles/InputDesign.css';

const InputDesign = () => {
  return (
    <section className="input-design-section">
      <div className="flow-diagram-container">
        <img
          src={cadproFlowGif}
          alt="CredPro flow diagram"
          className="flow-diagram-image"
        />
      </div>
    </section>
  );
};

export default InputDesign;
