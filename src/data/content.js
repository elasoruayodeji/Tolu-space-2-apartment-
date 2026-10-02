export const site = {
  name: "Tolu's Space",
  displayName: "TOLU SPACE",
  tagline: "Escape to Serenity.",
};

// Shared WhatsApp pre-filled message
const whatsappEnquiryText =
  "Hello Tolu's Space, I saw your website and I'd like to enquire about booking the apartment. My dates are: ";
const whatsappEnquiryQuery = `?text=${encodeURIComponent(whatsappEnquiryText)}`;

export const contact = {
  whatsapp: {
    uk: {
      number: "+44 7962 356853",
      link: `https://wa.me/447962356853${whatsappEnquiryQuery}`,
    },
    nigeria: {
      number: "+234 708 919 1951",
      link: `https://wa.me/2347089191951${whatsappEnquiryQuery}`,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// SHARED AMENITIES (same list applies to both apartments)
// ─────────────────────────────────────────────────────────────
const sharedAmenities = [
  { icon: "wifi",      title: "Fast WiFi",                detail: "100 Mbps" },
  { icon: "kitchen",   title: "Fully Equipped Kitchen",   detail: "Cook, dine and settle in" },
  { icon: "ac",        title: "AC in All Rooms",          detail: "Comfort throughout" },
  { icon: "tv",        title: "Smart TV + Netflix",       detail: "Easy nights in" },
  { icon: "parking",   title: "Free Parking",             detail: "Convenient on-site parking" },
  { icon: "security",  title: "24/7 Security & CCTV",     detail: "Peace of mind, day and night" },
  { icon: "workspace", title: "Dedicated Workspace",      detail: "Settle in and get work done" },
];

// ─────────────────────────────────────────────────────────────
// KINGS APARTMENT — 9 gallery images
// Folder: public/images/apartment-kings/
// ─────────────────────────────────────────────────────────────
const kingsGallery = [
  { file: "living-room.jpg",       title: "Living Room",              caption: "Lounge",              alt: "Kings Apartment living room" },
  { file: "master-bedroom-tv.jpg", title: "Master Bedroom",           caption: "TV side",             alt: "Kings Apartment master bedroom TV side" },
  { file: "master-bedroom-bed.jpg", title: "Master Bedroom",          caption: "Bed side",            alt: "Kings Apartment master bedroom bed side" },
  { file: "second-bedroom-tv.jpg", title: "Second Bedroom",           caption: "TV side",             alt: "Kings Apartment second bedroom TV side" },
  { file: "second-bedroom-bed.jpg", title: "Second Bedroom",          caption: "Bed side",            alt: "Kings Apartment second bedroom bed side" },
  { file: "master-bathroom.jpg",   title: "Master En-suite",          caption: "Bathtub",             alt: "Kings Apartment master bathroom" },
  { file: "second-bathroom.jpg",   title: "Second Bathroom",          caption: "Shower",              alt: "Kings Apartment second bathroom" },
  { file: "kitchen.jpg",           title: "Kitchen",                  caption: "Fully equipped",      alt: "Kings Apartment kitchen" },
  { file: "dining-workspace.jpg",  title: "Dining Area / Workspace",  caption: "Eat and work",        alt: "Kings Apartment dining and workspace" },
];

// ─────────────────────────────────────────────────────────────
// STANDARD APARTMENT — 5 gallery images
// Folder: public/images/apartment-standard/
// ─────────────────────────────────────────────────────────────
const standardGallery = [
  { file: "living-room.jpg",        title: "Living Room",     caption: "Lounge",         alt: "Standard Apartment living room" },
  { file: "master-bedroom-tv.jpg",  title: "Master Bedroom",  caption: "TV side",        alt: "Standard Apartment master bedroom TV side" },
  { file: "master-bedroom-bed.jpg", title: "Master Bedroom",  caption: "Bed side",       alt: "Standard Apartment master bedroom bed side" },
  { file: "bathroom.jpg",           title: "Bathroom",        caption: "Shower",         alt: "Standard Apartment bathroom" },
  { file: "kitchen.jpg",            title: "Kitchen",         caption: "Fully equipped", alt: "Standard Apartment kitchen" },
];

// ─────────────────────────────────────────────────────────────
// ABOUT COPY
// ─────────────────────────────────────────────────────────────
const kingsAbout = {
  intro:
    "Tolu Space Kings Apartment is a thoughtfully designed 2-bedroom short-let in the heart of Soluyi, Gbagada. Natural light, minimalist decor, a fully equipped kitchen, and 24/7 security. Perfect for business travellers, couples, and slow weekends in Lagos.",
  story:
    "Tolu Space Kings Apartment is our flagship two-bedroom. Both bedrooms are en-suite, the living space is open and calm, and the dining area doubles as a dedicated workspace. Built for guests who want a proper apartment — not a hotel room.",
  team: "Owned and managed by the Tolu's Space team; direct host contact via WhatsApp.",
  values: ["Serenity", "Considered design", "Full-service hosting"],
};

const standardAbout = {
  intro:
    "Tolu Space Apartment is a cosy one-bedroom short-let in Soluyi, Gbagada. Everything you need for a comfortable Lagos stay — living space, full kitchen, and a quiet bedroom — in a clean, considered setting.",
  story:
    "Tolu Space Apartment is our intimate one-bedroom. Ideal for solo travellers, couples, or short business trips where you want a self-contained space with all the essentials handled.",
  team: "Owned and managed by the Tolu's Space team; direct host contact via WhatsApp.",
  values: ["Serenity", "Considered design", "Full-service hosting"],
};

// ─────────────────────────────────────────────────────────────
// APARTMENTS
// ─────────────────────────────────────────────────────────────
export const apartments = {
  kings: {
    id: "kings",
    folder: "apartment-kings",
    name: "Kings Apartment",
    fullName: "Tolu Space Kings Apartment",
    displayName: "TOLU SPACE KINGS",
    headline: "Stylish 2BR in Soluyi, Gbagada",
    subheadline: "Your calm in the chaos of Lagos. Modern, Minimalist, Fully Serviced.",
    tag: "2 Bedrooms · Fully Serviced",
    address: "No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos",
    mapsQuery: "No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos",
    nightlyRate: 80000,
    rateCurrency: "₦",
    rateUnit: "per 24 hours",
    rateNote: "Extended stays are negotiable — message us for a custom quote.",
    bookingFootnote: "Fastest response — direct booking, no service fees.",
    heroImage: "second-bedroom-tv.jpg",
    description: kingsAbout.intro,
    about: kingsAbout,
    amenities: sharedAmenities,
    gallery: kingsGallery,
  },
  standard: {
    id: "standard",
    folder: "apartment-standard",
    name: "Standard Apartment",
    fullName: "Tolu Space Apartment",
    displayName: "TOLU SPACE",
    headline: "Cosy 1BR in Soluyi, Gbagada",
    subheadline: "A quiet, self-contained space for solo stays, couples and short trips.",
    tag: "1 Bedroom · Fully Serviced",
    address: "No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos",
    mapsQuery: "No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos",
    nightlyRate: 80000,
    rateCurrency: "₦",
    rateUnit: "per 24 hours",
    rateNote: "Extended stays are negotiable — message us for a custom quote.",
    bookingFootnote: "Fastest response — direct booking, no service fees.",
    heroImage: "living-room.jpg",
    description: standardAbout.intro,
    about: standardAbout,
    amenities: sharedAmenities,
    gallery: standardGallery,
  },
};

export const defaultApartmentId = "kings";
export function getApartment(id = defaultApartmentId) {
  return apartments[String(id)] || apartments[defaultApartmentId];
}

// Legacy exports (kept so old imports don't break)
export const about = kingsAbout;
export const amenities = sharedAmenities;
export const gallery = kingsGallery;

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const whatsappUrl = contact.whatsapp.nigeria.link;