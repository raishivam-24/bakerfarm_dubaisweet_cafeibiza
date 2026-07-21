import React from "react";
import { business, outlets, brands } from "../siteData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pc-footer">
      <div className="pc-footer-inner">
        <div className="pc-footer-grid">
          {/* Brand / Connect column */}
          <div className="pc-footer-brand">
            <div>
              <div className="pc-footer-logo-row">
                <img
                  src="/assets/logo/bakers-farm-logo.png"
                  alt=""
                  aria-hidden="true"
                />
                <span className="pc-footer-logo">{business.siteName}</span>
              </div>
              <p className="pc-footer-tagline">
                {brands.map((b) => b.name).join(" · ")} —{" "}
                {business.tagline}.
              </p>
            </div>
            <div className="pc-connect">
              <h4>Connect</h4>
              <div className="pc-connect-icons">
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <span className="material-symbols-outlined">
                    camera_alt
                  </span>
                </a>
                <a href={`tel:${outlets[0].phones[0].replace(/\s/g, "")}`} aria-label="Call">
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
              <a
                className="pc-instagram-handle"
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                @{business.instagram.replace("@", "")}
              </a>
            </div>
          </div>

          {/* Outlets column */}
          <div className="pc-footer-outlets">
            <h4>Our Outlets</h4>
            <div className="pc-outlets-grid">
              {outlets.map((outlet) => (
                <div className="pc-outlet-item" key={outlet.id}>
                  <h5>{outlet.name}</h5>
                  <p>{outlet.address}</p>
                  <div className="pc-outlet-phones">
                    {outlet.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s|-/g, "")}`}
                      >
                        <span className="material-symbols-outlined">
                          call
                        </span>
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pc-footer-bottom">
          <p>
            © {year} {business.groupName}. Delicious moments always.
          </p>
          <div className="pc-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
