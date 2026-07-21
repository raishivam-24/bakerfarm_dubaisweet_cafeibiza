/**
 * siteData.js
 * Central data source for Baker's Farm / The Dubai Sweets & Bakers / Cafe Ibiza.
 *
 * SOURCES & NOTES:
 * - Outlet addresses, phone numbers, hours, and brand names were transcribed
 *   directly from the "Thank You / Opening Ceremony" banner and the hours
 *   screenshot (see assets/banner and assets/hours).
 * - The three raw menu photos (assets/menu-raw) were uploaded at only
 *   140x140px — too low-resolution to OCR reliably, even after upscaling.
 *   The `menu` section below is carried over from the menu content already
 *   established earlier for these same three brands (Baker's Farm, Dubai
 *   Sweets, Cafe Ibiza). Treat prices/items as placeholders and replace them
 *   with a clean re-photograph of the physical menu when available.
 * - Image paths point into the /assets folder shipped alongside this file.
 */

export const business = {
  interiorPhotos: [
    "/assets/interior/bakery-front-display-diwali.png",
    "/assets/interior/dubai-sweets-counter.png",
    "/assets/interior/ibiza-bar-counter-plants.png",
    "/assets/interior/ibiza-lounge-night-seating.png",
    "/assets/interior/ibiza-lounge-day-mural.png",
    "/assets/interior/ibiza-bar-day-tv.png",
  ],
  siteName: "bakerfarm_dubaisweet_cafeibiza",
  groupName: "Baker's Farm Bakery & Cafe",
  tagline: "Serving Love With Purity",
  thankYouMessage:
    "Your love, support, and blessings made this day truly special and memorable. We are grateful to have you as part of our journey.",
  instagram: "@bakerfarm_dubaisweet_cafeibiza",
  instagramUrl: "https://instagram.com/bakerfarm_dubaisweet_cafeibiza",
  logo: "/assets/logo/bakers-farm-logo.png",
};

// The three co-located brands operating under one roof at each outlet
export const brands = [
  {
    id: "bakers-farm",
    name: "Baker's Farm",
    subtitle: "Bakery & Cafe",
    description:
      "Freshly baked artisan breads, croissants, and celebration cakes — The Cake Shop.",
    logo: "/assets/logo/bakers-farm-logo.png",
  },
  {
    id: "dubai-sweets",
    name: "The Dubai Sweets & Bakers",
    subtitle: "By Baker's Farm",
    description:
      "Traditional and contemporary sweet treats, serving love with purity.",
  },
  {
    id: "cafe-ibiza",
    name: "Cafe Ibiza",
    subtitle: "The Cafe & Steaks House",
    description:
      "Coffees, mocktails, wood-fired pizzas, and a relaxed lounge atmosphere.",
  },
];

// Store hours — identical across all outlets per the hours listing
export const hours = [
  { day: "Monday", time: "9 am–11 pm" },
  { day: "Tuesday", time: "9 am–11 pm" },
  { day: "Wednesday", time: "9 am–11 pm" },
  { day: "Thursday", time: "9 am–11 pm" },
  { day: "Friday", time: "9 am–11 pm" },
  { day: "Saturday", time: "9 am–11 pm" },
  { day: "Sunday", time: "9 am–11 pm" },
];

// Outlets — transcribed from the opening ceremony banner
export const outlets = [
  {
    id: "main-branch",
    name: "Main Branch",
    address: "Tarbahar, Bilaspur (C.G.)",
    phones: ["07752 404141", "8109404141"],
    mapUrl: "https://maps.app.goo.gl/B58sKmUYTA2gRMXm9",
  },
  {
    id: "2nd-outlet",
    name: "2nd Outlet",
    address: "Collectorate Road, Nehru Chowk, Bilaspur (C.G.)",
    phones: ["07752 434141", "9301434141"],
    mapUrl: "https://maps.app.goo.gl/N5zyUqa8rNd1yZd79",
  },
  {
    id: "3rd-outlet",
    name: "3rd Outlet",
    address: "Shila Shikhar Complex, Sarkanda, Bilaspur (C.G.)",
    phones: ["07752 266666", "9893326666"],
    mapUrl: "https://maps.app.goo.gl/743PhpeimWznScKP7",
  },
  {
    id: "4th-outlet",
    name: "4th Outlet",
    address:
      "Anant Chamber, near Sharan Cycle Store, Sipat Main Road, opp. Dominos, near Vasant Vihar Chowk, Bilaspur (C.G.)",
    phones: ["07752-297771", "8878-297771"],
    mapUrl: null,
  },
];

// Menu — carried over from prior menu build for these same brands, now
// priced in INR (₹) to match the real market (Bilaspur, C.G.).
// NOTE: still placeholder data — verify against a clear photo of the
// physical menu and replace; see file header.
export const menu = {
  bakersFarm: {
    label: "Bakery",
    icon: "bakery_dining",
    description:
      "Freshly baked breads, croissants, and artisanal cakes — baked fresh daily using traditional methods.",
    items: [
      { name: "Sourdough Boule", price: "₹180" },
      { name: "Almond Croissant", price: "₹120" },
      { name: "Pistachio Eclair", price: "₹140" },
      { name: "Butter Croissant", price: "₹90" },
      { name: "Chocolate Muffin", price: "₹100" },
      { name: "Custom Celebration Cake (per kg)", price: "₹550" },
    ],
  },
  dubaiSweets: {
    label: "Sweets",
    icon: "cake",
    description:
      "Traditional and contemporary sweet treats — perfect for gifting or indulgent moments.",
    items: [
      { name: "Rose Baklava", price: "₹90" },
      { name: "Kunafa Nests", price: "₹120" },
      { name: "Pistachio Truffles", price: "₹160" },
      { name: "Assorted Dry Fruit Box", price: "₹450" },
      { name: "Gulab Cake (per kg)", price: "₹500" },
    ],
  },
  cafeIbiza: {
    label: "Cafe & Lounge",
    icon: "local_cafe",
    description:
      "Coffees, mocktails, and cafe classics to complement your sweet moments.",
    items: [
      { name: "Signature Flat White", price: "₹150" },
      { name: "Matcha Latte", price: "₹180" },
      { name: "Iced Mocha Shake", price: "₹190" },
      { name: "Corn & Cheese Pizza", price: "₹280" },
      { name: "Virgin Mojito", price: "₹170" },
      { name: "House Steak", price: "₹650" },
    ],
  },
  // Raw (unreadable) source photos kept for reference / manual re-entry
  rawMenuPhotos: [
    "/assets/menu-raw/menu-page-1-lowres.png",
    "/assets/menu-raw/menu-page-2-lowres.png",
    "/assets/menu-raw/menu-page-3-lowres.png",
  ],
};

// Custom cake showcase, pulled from in-store photos
export const cakeGallery = [
  {
    id: "cake-jack-daniels",
    title: "Chocolate Drip Cake",
    description:
      "Dark chocolate drip cake loaded with wafer bars, Ferrero Rocher, and a Johnnie Walker Black Label print topper.",
    image: "/assets/cakes/cake-chocolate-jack-daniels.png",
  },
  {
    id: "cake-gender-reveal",
    title: "Baby Shower Cake",
    description:
      "Soft pastel gender-reveal cake with hand-cut butterfly toppers and a custom printed silhouette.",
    image: "/assets/cakes/cake-baby-shower-gender-reveal.png",
  },
  {
    id: "cake-princess",
    title: "Princess Tiered Cake",
    description:
      "Three-tier ruffled princess cake with a fondant crown, doll topper, and personalized name plaque.",
    image: "/assets/cakes/cake-princess-pink-tiered.png",
  },
];

// Interior / exterior / ambience photography
export const spaceGallery = [
  {
    id: "storefront",
    title: "Storefront at Night",
    image: "/assets/exterior/storefront-night-signage.png",
  },
  {
    id: "bakery-display",
    title: "Bakery Front Display",
    image: "/assets/interior/bakery-front-display-diwali.png",
  },
  {
    id: "sweets-counter",
    title: "Dubai Sweets Counter",
    image: "/assets/interior/dubai-sweets-counter.png",
  },
  {
    id: "ibiza-bar-plants",
    title: "Cafe Ibiza Bar",
    image: "/assets/interior/ibiza-bar-counter-plants.png",
  },
  {
    id: "ibiza-lounge-night",
    title: "Ibiza Lounge, Evening",
    image: "/assets/interior/ibiza-lounge-night-seating.png",
  },
  {
    id: "ibiza-lounge-day",
    title: "Ibiza Lounge, Daytime",
    image: "/assets/interior/ibiza-lounge-day-mural.png",
  },
  {
    id: "ibiza-bar-day",
    title: "Ibiza Bar & TV Corner",
    image: "/assets/interior/ibiza-bar-day-tv.png",
  },
];

// Food & drink photography
export const foodGallery = [
  {
    id: "corn-cheese-pizza",
    title: "Corn & Cheese Pizza",
    image: "/assets/food-drinks/corn-cheese-pizza.png",
  },
  {
    id: "mocktails",
    title: "Welcome to Ibiza Mocktails",
    image: "/assets/food-drinks/mocktails-welcome-to-ibiza.png",
  },
  {
    id: "latte-art",
    title: "Signature Latte Art",
    image: "/assets/food-drinks/coffee-latte-art.png",
  },
  {
    id: "iced-mocha",
    title: "Iced Mocha Shakes",
    image: "/assets/food-drinks/iced-mocha-shakes.png",
  },
];

export default {
  business,
  brands,
  hours,
  outlets,
  menu,
  cakeGallery,
  spaceGallery,
  foodGallery,
};
