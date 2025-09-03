import React, { useState } from 'react';
import './ContactFormsSection.css';

const ContactFormsSection = () => {
  const [careersForm, setCareersForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    interest: '',
    message: ''
  });

  const [connectForm, setConnectForm] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleCareersChange = (e) => {
    const { name, value } = e.target;
    setCareersForm(prev => ({ ...prev, [name]: value }));
  };

  const handleConnectChange = (e) => {
    const { name, value } = e.target;
    setConnectForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCareersSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in careers at AadiSwan!');
    setCareersForm({
      fullName: '',
      email: '',
      phone: '',
      currentRole: '',
      interest: '',
      message: ''
    });
  };

  const handleConnectSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setConnectForm({
      fullName: '',
      workEmail: '',
      phone: '',
      company: '',
      interest: '',
      message: ''
    });
  };

  const ChevronDownIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#003760" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const DragIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.523 0.353516L0.353516 6.523M6.98064 3.89589L3.8959 6.98063" stroke="#B3B3B3"/>
    </svg>
  );

  return (
    <div className="contact-forms-section">
      <div className="forms-container">
        {/* Careers Form */}
        <div className="form-background">
          <div className="form-content">
            <h2 className="form-title">Careers @ AadiSwan</h2>
            
            <form onSubmit={handleCareersSubmit} className="contact-form">
              <div className="input-field">
                <label className="field-label">Full Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="Value"
                    value={careersForm.fullName}
                    onChange={handleCareersChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Value"
                    value={careersForm.email}
                    onChange={handleCareersChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Phone Number</label>
                <div className="input-wrapper phone-input">
                  <ChevronDownIcon />
                  <span className="country-code">+91</span>
                  <span className="separator">  |  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input phone-number"
                    value={careersForm.phone}
                    onChange={handleCareersChange}
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Current Role/ Status</label>
                <div className="input-wrapper select-wrapper">
                  <select
                    name="currentRole"
                    className="form-select"
                    value={careersForm.currentRole}
                    onChange={handleCareersChange}
                  >
                    <option value="">-select-</option>
                    <option value="student">Student</option>
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced Professional</option>
                    <option value="freelancer">Freelancer</option>
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Interest</label>
                <div className="input-wrapper select-wrapper">
                  <select
                    name="interest"
                    className="form-select"
                    value={careersForm.interest}
                    onChange={handleCareersChange}
                  >
                    <option value="">-select-</option>
                    <option value="engineering">Engineering</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="operations">Operations</option>
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>

              <div className="textarea-field">
                <label className="field-label">Message</label>
                <div className="textarea-wrapper">
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Value"
                    value={careersForm.message}
                    onChange={handleCareersChange}
                    rows="4"
                  />
                  <div className="drag-icon">
                    <DragIcon />
                  </div>
                </div>
              </div>

              <div className="button-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Let's Connect Form */}
        <div className="form-background">
          <div className="form-content">
            <h2 className="form-title">Let's Connect!</h2>
            
            <form onSubmit={handleConnectSubmit} className="contact-form">
              <div className="input-field">
                <label className="field-label">Full Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="Value"
                    value={connectForm.fullName}
                    onChange={handleConnectChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Work Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="workEmail"
                    className="form-input"
                    placeholder="Value"
                    value={connectForm.workEmail}
                    onChange={handleConnectChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Phone Number</label>
                <div className="input-wrapper phone-input">
                  <ChevronDownIcon />
                  <span className="country-code">+91</span>
                  <span className="separator">  |  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input phone-number"
                    value={connectForm.phone}
                    onChange={handleConnectChange}
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Company</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="Value"
                    value={connectForm.company}
                    onChange={handleConnectChange}
                  />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Interest</label>
                <div className="input-wrapper select-wrapper">
                  <select
                    name="interest"
                    className="form-select"
                    value={connectForm.interest}
                    onChange={handleConnectChange}
                  >
                    <option value="">-select-</option>
                    <option value="credpro">CredPro Platform</option>
                    <option value="partnership">Partnership</option>
                    <option value="consultation">Consultation</option>
                    <option value="demo">Product Demo</option>
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>

              <div className="textarea-field">
                <label className="field-label">Message</label>
                <div className="textarea-wrapper">
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Value"
                    value={connectForm.message}
                    onChange={handleConnectChange}
                    rows="4"
                  />
                  <div className="drag-icon">
                    <DragIcon />
                  </div>
                </div>
              </div>

              <div className="button-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormsSection;
