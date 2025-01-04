'use client';

import React, { useState } from 'react';
import './contact.css';

const ContactComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <h2 className="title title-1 font-black text-center">Contact me_</h2>
      <div className="contact">
        <div className="contact-card">
          <div className="subtitle-1 text-white">Get in touch with me</div>
          <form onSubmit={handleSubmit} className="contact-card-form">
            <div>
              <label className="mb-0.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="textbox w-11/12"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="mb-0.5" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="textbox w-11/12"
                placeholder=""
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="mb-0.5" htmlFor="message">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className="textbox w-11/12 h-40"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit" className="button-1 font-heavy">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
