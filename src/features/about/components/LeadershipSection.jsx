import React from 'react';
import './LeadershipSection.css';

const LeadershipSection = () => {
  return (
    <div className="leadership-section">
      <h2 className="leadership-title">LEADERSHIP</h2>
      
      <p className="leadership-description">
        At the heart of AadiSwan is a leadership team that blends deep financial expertise with cutting-edge technology innovation. With backgrounds in banking, credit underwriting, risk management, and enterprise technology, our leaders bring decades of experience to drive the company's mission forward.
        <br /><br />
        <strong>Domain-First Expertise</strong> – Our leaders are seasoned professionals from the financial sector who understand the real challenges of credit, compliance, and risk management.
        <br />
        <strong>Technology-Driven Vision</strong> – With a strong focus on automation, AI, and API ecosystems, they ensure our products remain future-ready and scalable.
        <br />
        <strong>Customer-Centric Approach</strong> – The leadership team emphasizes building long-term partnerships, ensuring our solutions deliver measurable value to every client.
        <br />
        <strong>Proven Track Record</strong> – Under their guidance, AadiSwan has expanded across India and the Middle East, earning trust from banks, NBFCs, and financial institutions.
        <br /><br />
        Together, our leadership team is committed to shaping the future of digital lending — enabling financial institutions to transform operations, stay compliant, and deliver superior customer experiences.
      </p>
      
      <div className="leadership-cards-container">
        <div className="leadership-card">
          <div className="leader-image">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/54efe0ebfb5a8e54d51551b0a070df8a13502c69?width=600" 
              alt="Animesh Singh Chauhan" 
            />
          </div>
          <div className="leader-info">
            <h3 className="leader-name">Animesh Singh Chauhan</h3>
            <p className="leader-title">Founder & CEO</p>
            <p className="leader-description">
              With deep expertise in credit underwriting and technology, he drives the company's mission to deliver innovative, API-integrated credit automation solutions that empower banks, NBFCs, and MSME lenders across India and the Middle East.
            </p>
          </div>
        </div>

        <div className="leadership-card">
          <div className="leader-image">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1b5e5793fc043824ed9ebbe20731209ca8ee92c7?width=600" 
              alt="Sudhansu Sekhar Mishra" 
            />
          </div>
          <div className="leader-info">
            <h3 className="leader-name">Sudhansu Sekhar Mishra</h3>
            <p className="leader-title">Director</p>
            <p className="leader-description">
              Appointed in 2020, Sudhansu Sekhar Mishra supports AadiSwan's strategic outreach and operations. With a professional background in fintech implementation and business development, he helps drive client-focused innovation and expansion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
