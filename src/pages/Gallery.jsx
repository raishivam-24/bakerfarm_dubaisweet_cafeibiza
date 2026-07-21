import React, { useState, useMemo } from "react";
import { cakeGallery, spaceGallery, foodGallery } from "../siteData.js";
import "./Gallery.css";

const categories = [
  { id: "all", label: "All" },
  { id: "cakes", label: "Cakes" },
  { id: "space", label: "Interior & Exterior" },
  { id: "food", label: "Food & Drinks" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const items = useMemo(() => {
    const tagged = [
      ...cakeGallery.map((item) => ({ ...item, category: "cakes" })),
      ...spaceGallery.map((item) => ({ ...item, category: "space" })),
      ...foodGallery.map((item) => ({ ...item, category: "food" })),
    ];
    return active === "all"
      ? tagged
      : tagged.filter((item) => item.category === active);
  }, [active]);

  return (
    <div className="pc-gallery">
      <main className="pc-main">
        {/* Hero */}
        <section className="pc-hero">
          <span className="pc-eyebrow">Moments</span>
          <h1>Our Sweet Beginnings</h1>
          <p>
            A visual journey through our outlets — grand opening ceremony,
            custom cakes, the cafe lounge, and everything in between.
          </p>
        </section>

        {/* Filters */}
        <div className="pc-filters" role="tablist" aria-label="Gallery categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              className={
                active === cat.id ? "pc-filter pc-filter-active" : "pc-filter"
              }
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="pc-grid">
          {items.map((item) => (
            <figure className="pc-tile" key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>
                <span>{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </div>
  );
}
