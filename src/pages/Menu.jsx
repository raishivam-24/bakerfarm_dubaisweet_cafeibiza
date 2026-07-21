import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { menu, business } from "../siteData.js";
import "./Menu.css";

const menuPages = menu.rawMenuPhotos.map((src, i) => ({
  src,
  label: `Menu Page ${i + 1}`,
  filename: `${business.siteName}-menu-page-${i + 1}.png`,
}));

export default function Menu() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const trackRef = useRef(null);

  const scrollByCard = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".pc-menu-photo-card");
    const cardWidth = card ? card.offsetWidth + 28 : 320; // + gap
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }, []);

  const close = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? i : (i - 1 + menuPages.length) % menuPages.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % menuPages.length)),
    []
  );

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, showPrev, showNext]);

  return (
    <div className="pc-menu">
      {/* Dark hero banner with breadcrumb */}
      <section className="pc-menu-hero">
        <img
          src="/assets/interior/ibiza-lounge-night-seating.png"
          alt=""
          aria-hidden="true"
        />
        <div className="pc-menu-hero-overlay"></div>
        <div className="pc-menu-hero-content">
          <h1>
            Food <span>Menu</span>
          </h1>
          <nav className="pc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="material-symbols-outlined" aria-hidden="true">
              restaurant
            </span>
            <span>Menu</span>
          </nav>
        </div>
      </section>

      <main className="pc-menu-main">
        <div className="pc-menu-toolbar">
          <p>Tap any page to view it full-size.</p>
          
            <a className="pc-download-all"
            href={menuPages[0].src}
            download={menuPages[0].filename}
            onClick={(e) => {
              // trigger a download for every page, one after another
              e.preventDefault();
              menuPages.forEach((page, i) => {
                setTimeout(() => {
                  const link = document.createElement("a");
                  link.href = page.src;
                  link.download = page.filename;
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }, i * 300);
              });
            }}
          >
            <span className="material-symbols-outlined">download</span>
            Download Menu
          </a>
        </div>

        {/* Menu page images — horizontal scroll */}
        <div className="pc-menu-carousel">
          <button
            type="button"
            className="pc-menu-carousel-arrow pc-menu-carousel-arrow-left"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="pc-menu-photo-grid" ref={trackRef}>
            {menuPages.map((page, i) => (
              <figure className="pc-menu-photo-card" key={page.src}>
                <button
                  type="button"
                  className="pc-menu-photo-btn"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View ${page.label} full size`}
                >
                  <img src={page.src} alt={page.label} loading="lazy" />
                  <span className="pc-menu-photo-overlay">
                    <span className="material-symbols-outlined">zoom_in</span>
                    View Full Image
                  </span>
                </button>
                <figcaption>
                  <span>{page.label}</span>
                  
                  <a href={page.src}
                    download={page.filename}
                    aria-label={`Download ${page.label}`}
                  >
                    <span className="material-symbols-outlined">download</span>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="pc-menu-carousel-arrow pc-menu-carousel-arrow-right"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Note */}
        <div className="pc-note">
          <span className="material-symbols-outlined">info</span>
          <p>
            For today&apos;s specials or anything not shown here, ask
            in-store or check{" "}
            <a href={business.instagramUrl} target="_blank" rel="noreferrer">
              @{business.instagram.replace("@", "")}
            </a>
            .
          </p>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="pc-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={menuPages[lightboxIndex].label}
          onClick={close}
        >
          <button
            type="button"
            className="pc-lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <button
            type="button"
            className="pc-lightbox-arrow pc-lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <img
            className="pc-lightbox-image"
            src={menuPages[lightboxIndex].src}
            alt={menuPages[lightboxIndex].label}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="pc-lightbox-arrow pc-lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next page"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div className="pc-lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <span>{menuPages[lightboxIndex].label} of {menuPages.length}</span>
            
            <a href={menuPages[lightboxIndex].src}
              download={menuPages[lightboxIndex].filename}
              className="pc-lightbox-download"
            >
              <span className="material-symbols-outlined">download</span>
              Download this page
            </a>
          </div>
        </div>
      )}
    </div>
  );
}