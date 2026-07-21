import React from "react";
import { Link } from "react-router-dom";
import { business, brands, cakeGallery, hours } from "../siteData.js";
import "./Home.css";

const brandIcons = {
  "bakers-farm": "bakery_dining",
  "dubai-sweets": "cake",
  "cafe-ibiza": "local_cafe",
};

export default function Home() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Mon = 0
  const today = hours[todayIndex];

  return (
    <div className="pc-home">
      {/* Hero */}
      <section className="pc-hero">
        <div className="pc-hero-inner">
          <p className="pc-hero-eyebrow">Thank You!</p>
          <h1 className="pc-hero-title">
            To all our amazing customers for joining us in our{" "}
            <span className="pc-accent">OPENING CEREMONY</span>
          </h1>
          <p className="pc-hero-quote">&quot;{business.thankYouMessage}&quot;</p>
          <div className="pc-hero-divider">
            <div className="pc-hero-divider-line"></div>
            <span className="pc-hero-divider-label">
              {business.tagline}
            </span>
            <div className="pc-hero-divider-line"></div>
          </div>
          <div className="pc-hero-media">
            <img
              src="/assets/interior/bakery-front-display-diwali.png"
              alt="Baker's Farm bakery display counter"
            />
          </div>
          <p className="pc-hero-today">
            Open today ({today.day}): <strong>{today.time}</strong>
          </p>
        </div>
      </section>

      {/* Featured brands */}
      <section className="pc-brands">
        <div className="pc-brands-inner">
          <div className="pc-section-heading">
            <h2>Three Brands, One Roof</h2>
            <p>
              Every outlet houses all three experiences — walk in for
              breakfast pastries, stay for coffee, come back for a night out.
            </p>
          </div>
          <div className="pc-brands-grid">
            {brands.map((brand) => (
              <div className="pc-brand-card" key={brand.id}>
                <span className="material-symbols-outlined pc-brand-icon">
                  {brandIcons[brand.id]}
                </span>
                <h3>{brand.name}</h3>
                <p className="pc-brand-subtitle">{brand.subtitle}</p>
                <p>{brand.description}</p>
                <Link className="pc-brand-link" to="/menu">
                  View menu
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cake showcase */}
      <section className="pc-cakes">
        <div className="pc-cakes-inner">
          <div className="pc-section-heading">
            <h2>Custom Cakes, Made to Order</h2>
            <p>
              Birthdays, baby showers, and celebrations of every kind — see
              more in the gallery.
            </p>
          </div>
          <div className="pc-cakes-grid">
            {cakeGallery.map((cake) => (
              <div className="pc-cake-card" key={cake.id}>
                <div className="pc-cake-media">
                  <img src={cake.image} alt={cake.title} />
                </div>
                <h3>{cake.title}</h3>
                <p>{cake.description}</p>
              </div>
            ))}
          </div>
          <div className="pc-cakes-cta">
            <Link className="pc-outline-btn" to="/gallery">
              See full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta-band">
        <div className="pc-cta-band-inner">
          <h2>&quot;Delicious Moments Always&quot;</h2>
          <p>
            Find your nearest outlet, check today&apos;s hours, or send us a
            message — we&apos;d love to have you.
          </p>
          <div className="pc-cta-band-actions">
            <Link className="pc-solid-btn" to="/contact">
              Find an Outlet
            </Link>
            <Link className="pc-outline-btn pc-outline-btn-light" to="/menu">
              Browse the Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
