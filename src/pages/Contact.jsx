import React, { useState } from "react";
import { business, outlets, hours } from "../siteData.js";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    // Wire this up to your inquiry endpoint of choice.
    console.log("Inquiry submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="pc-contact">
      <main className="pc-main">
        {/* Hero */}
        <section className="pc-hero">
          <h1>Thank You</h1>
          <p>{business.thankYouMessage}</p>
          <div className="pc-hero-rule"></div>
        </section>

        {/* Outlets */}
        <section className="pc-locations">
          <div className="pc-locations-heading">
            <h2>Our Locations</h2>
            <p>Four outlets across Bilaspur (C.G.) — find one near you</p>
          </div>
          <div className="pc-locations-grid">
            {outlets.map((outlet) => (
              <div className="pc-location-card" key={outlet.id}>
                <span className="material-symbols-outlined pc-location-icon">
                  location_on
                </span>
                <h3>{outlet.name}</h3>
                <p>{outlet.address}</p>
                <div className="pc-location-rule"></div>
                <div className="pc-location-phones">
                  {outlet.phones.map((phone) => (
                    <a
                      key={phone}
                      className="pc-location-phone"
                      href={`tel:${phone.replace(/\s|-/g, "")}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                {outlet.mapUrl && (
                  <a
                    className="pc-location-map"
                    href={outlet.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hours + Form split */}
        <section className="pc-split">
          {/* Form */}
          <div className="pc-form-panel">
            <h3>Send us a message</h3>
            <div className="pc-form">
              <div className="pc-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="pc-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="pc-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="pc-submit" onClick={handleSubmit}>
                Send Inquiry
              </button>
              {submitted && (
                <p className="pc-form-success">
                  Thanks — we&apos;ll get back to you soon!
                </p>
              )}
            </div>
          </div>

          {/* Hours panel */}
          <div className="pc-hours-panel">
            <h3>Opening Hours</h3>
            <div className="pc-hours-table">
              {hours.map((h) => (
                <div className="pc-hours-row" key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
            <div className="pc-visual-caption">
              <p>Delicious moments always.</p>
              <p>We look forward to serving you with love and purity.</p>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                @{business.instagram.replace("@", "")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
