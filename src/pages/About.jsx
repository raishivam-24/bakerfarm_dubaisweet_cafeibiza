import React from "react";
import { business, brands, hours, outlets } from "../siteData.js";
import "./About.css";

export default function About() {
  return (
    <div className="pc-about">
      <div className="pc-container">
        {/* Hero */}
        <section className="pc-hero">
          <div className="pc-hero-content">
            <span className="pc-eyebrow">Our Sweet Beginning</span>
            <h1 className="pc-hero-title">
              Grateful to have you as part of our journey.
            </h1>
            <p className="pc-hero-desc">{business.thankYouMessage}</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="pc-philosophy">
          <div className="pc-philosophy-text">
            <div className="pc-label-row">
              <div className="pc-label-line"></div>
              <span className="pc-label-text">The Philosophy</span>
            </div>
            <h2 className="pc-heading">
              Serving Love <br />
              <span className="pc-heading-accent">With Purity</span>
            </h2>
            <div className="pc-prose">
              <p>
                Under one roof, {brands.map((b) => b.name).join(", ")} bring
                together fresh-baked breads, celebration cakes, traditional
                sweets, and a full cafe &amp; lounge menu — four outlets
                across Bilaspur, each carrying the same commitment to
                quality ingredients and genuine hospitality.
              </p>
              <p>
                From the ovens of Baker&apos;s Farm to the mixology counter at
                Cafe Ibiza, every creation is a celebration of taste,
                crafted with care and served with warmth.
              </p>
            </div>
            <div className="pc-quote-block">
              <div className="pc-quote">
                <span className="material-symbols-outlined">favorite</span>
                <p>&quot;Delicious moments always.&quot;</p>
              </div>
            </div>
          </div>
          <div className="pc-philosophy-image">
            <div className="pc-image-frame">
              <img
                src="/assets/banner/thank-you-outlets-banner.png"
                alt="Signature chocolate drip celebration cake"
              />
            </div>
            <div className="pc-image-accent"></div>
          </div>
        </section>

        {/* Hours */}
        <section className="pc-hours">
          <div className="pc-section-heading">
            <span className="pc-label-text">Every Day</span>
            <h2 className="pc-heading-plain">Opening Hours</h2>
          </div>
          <div className="pc-hours-table">
            {hours.map((h) => (
              <div className="pc-hours-row" key={h.day}>
                <span className="pc-hours-day">{h.day}</span>
                <span className="pc-hours-time">{h.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Outlets */}
        <section className="pc-outlets">
          <div className="pc-section-heading">
            <span className="pc-label-text">Find Us</span>
            <h2 className="pc-heading-plain">Our Outlets</h2>
          </div>
          <div className="pc-outlets-grid">
            {outlets.map((outlet) => (
              <div className="pc-outlet-card" key={outlet.id}>
                <div className="pc-outlet-icon">
                  <span className="material-symbols-outlined">
                    location_on
                  </span>
                </div>
                <div>
                  <h3>{outlet.name}</h3>
                  <p>{outlet.address}</p>
                </div>
                <div className="pc-outlet-footer">
                  {outlet.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s|-/g, "")}`}
                      className="pc-outlet-phone"
                    >
                      <span className="material-symbols-outlined">call</span>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}