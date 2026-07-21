import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { business } from "../siteData.js";
import "./Header.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Menu", to: "/menu" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pc-header">
      <div className="pc-header-inner">
        <NavLink
          className="pc-brand"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="pc-brand-logo"
            src="/assets/logo/bakers-farm-logo.png"
            alt=""
            aria-hidden="true"
          />
          <span>{business.siteName}</span>
        </NavLink>

        <nav className="pc-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "pc-active" : undefined
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="pc-cta-wrap">
          <a
            className="pc-cta"
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </div>

        <button
          className="pc-mobile-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav className="pc-mobile-menu" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "pc-active" : undefined
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="pc-cta"
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </nav>
      )}
    </header>
  );
}
