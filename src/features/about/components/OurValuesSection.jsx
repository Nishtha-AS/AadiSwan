import React from 'react';
import './OurValuesSection.css';

const OurValuesSection = () => {
  return (
    <div className="our-values-section">
      <h2 className="our-values-title">OUR VALUES</h2>
      
      <div className="values-container">
        <div className="value-card">
          <div className="value-icon">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.25 34.375V29.9844C57.9531 29.125 59.4687 27.9219 60.7031 26.4531C60.2969 25.5469 60.3125 24.4688 60.8281 23.5313C61.3594 22.6094 62.2656 22.0625 63.2344 21.9688C63.7656 20.4688 64.0625 18.8594 64.0625 17.1719C64.0625 15.4844 63.7656 13.875 63.2344 12.375C62.2656 12.2813 61.3438 11.7344 60.8281 10.8125C60.2969 9.89063 60.2969 8.79688 60.7031 7.89063C58.6406 5.4375 55.7969 3.70312 52.5469 3.10938C51.9844 3.92188 51.0469 4.45312 50 4.45312C48.9531 4.45312 48.0156 3.92188 47.4531 3.10938C44.2031 3.71875 41.3594 5.45313 39.2969 7.89063C39.7031 8.79688 39.6875 9.875 39.1719 10.8125C38.6406 11.7344 37.7344 12.2813 36.7656 12.375C36.2344 13.875 35.9375 15.4844 35.9375 17.1719C35.9375 18.8594 36.2344 20.4688 36.7656 21.9688C37.7344 22.0625 38.6562 22.6094 39.1719 23.5313C39.7031 24.4531 39.7031 25.5469 39.2969 26.4531C40.5156 27.9219 42.0312 29.1094 43.75 29.9844V34.375" fill="#FFBC0A"/>
              <path d="M50 96.875H45.3125L42.1875 93.75H15.625V56.25H21.875V84.375C21.875 84.375 40.8594 79.6875 50 96.875Z" fill="#274C77"/>
              <path d="M78.125 84.375V56.25H84.375V93.75H57.8125L54.6875 96.875H50C59.1406 79.6875 78.125 84.375 78.125 84.375Z" fill="#274C77"/>
              <path d="M50 96.875C40.8594 79.6875 21.875 84.375 21.875 84.375V51.5625L31.25 48.4375V78.125C41.6094 78.125 50 86.5156 50 96.875Z" fill="#6096BA"/>
              <path d="M68.75 48.4375L78.125 51.5625V84.375C78.125 84.375 59.1406 79.6875 50 96.875C50 86.5156 58.3906 78.125 68.75 78.125V48.4375Z" fill="#6096BA"/>
              <path d="M50 65.625C50 55.2656 41.6094 46.875 31.25 46.875V78.125C41.6094 78.125 50 86.5156 50 96.875C50 86.5156 58.3906 78.125 68.75 78.125V46.875C58.3906 46.875 50 55.2656 50 65.625Z" fill="#A3CEF1"/>
              <path d="M50 25C54.3147 25 57.8125 21.5022 57.8125 17.1875C57.8125 12.8728 54.3147 9.375 50 9.375C45.6853 9.375 42.1875 12.8728 42.1875 17.1875C42.1875 21.5022 45.6853 25 50 25Z" fill="#A3CEF1"/>
              <path d="M56.25 34.375H43.75C42.8871 34.375 42.1875 35.0746 42.1875 35.9375V39.0625C42.1875 39.9254 42.8871 40.625 43.75 40.625H56.25C57.1129 40.625 57.8125 39.9254 57.8125 39.0625V35.9375C57.8125 35.0746 57.1129 34.375 56.25 34.375Z" fill="#274C77"/>
              <path d="M35.9375 26.5625H32.8125V29.6875H35.9375V26.5625Z" fill="#F76C5E"/>
              <path d="M31.25 15.625H28.125V18.75H31.25V15.625Z" fill="#F76C5E"/>
              <path d="M25 20.3125H21.875V23.4375H25V20.3125Z" fill="#F76C5E"/>
              <path d="M20.3125 26.5625H17.1875V29.6875H20.3125V26.5625Z" fill="#F76C5E"/>
              <path d="M20.3125 34.375H17.1875V37.5H20.3125V34.375Z" fill="#F76C5E"/>
              <path d="M20.3125 43.75H17.1875V46.875H20.3125V43.75Z" fill="#F76C5E"/>
              <path d="M71.875 15.625H68.75V18.75H71.875V15.625Z" fill="#F76C5E"/>
              <path d="M78.125 20.3125H75V23.4375H78.125V20.3125Z" fill="#F76C5E"/>
              <path d="M82.8125 26.5625H79.6875V29.6875H82.8125V26.5625Z" fill="#F76C5E"/>
              <path d="M82.8125 34.375H79.6875V37.5H82.8125V34.375Z" fill="#F76C5E"/>
              <path d="M82.8125 43.75H79.6875V46.875H82.8125V43.75Z" fill="#F76C5E"/>
              <path d="M35.9375 32.8125H32.8125V35.9375H35.9375V32.8125Z" fill="#F76C5E"/>
              <path d="M35.9375 39.0625H32.8125V42.1875H35.9375V39.0625Z" fill="#F76C5E"/>
              <path d="M67.1875 26.5625H64.0625V29.6875H67.1875V26.5625Z" fill="#F76C5E"/>
              <path d="M67.1875 32.8125H64.0625V35.9375H67.1875V32.8125Z" fill="#F76C5E"/>
              <path d="M67.1875 39.0625H64.0625V42.1875H67.1875V39.0625Z" fill="#F76C5E"/>
              <path d="M51.5625 43.75H48.4375V46.875H51.5625V43.75Z" fill="#F76C5E"/>
              <path d="M51.5625 50H48.4375V53.125H51.5625V50Z" fill="#F76C5E"/>
            </svg>
          </div>
          <h3 className="value-label">Innovation</h3>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ae91716986ee41120f31951e4f2a4bad3b85430a?width=200" alt="Integrity" />
          </div>
          <h3 className="value-label">Integrity</h3>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ffec287612345397a6c4d1d57a05f76fdac23340?width=200" alt="Collaboration" />
          </div>
          <h3 className="value-label">Collaboration</h3>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/85d55f22e0ee9155aa0e7bb9e490a98e4e83daea?width=200" alt="Customer-Centricity" />
          </div>
          <h3 className="value-label">Customer-Centricity</h3>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d1bc3ccf7892832e51a70d12103f2f1d4e31db83?width=200" alt="Sustainability" />
          </div>
          <h3 className="value-label">Sustainability</h3>
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;
