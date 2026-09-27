export const site = { name: "Tolu's Space", displayName: "TOLU SPACE", tagline: "Escape to Serenity." };

const whatsappEnquiryText = "Hello Tolu's Space, I saw your website and I'd like to enquire about booking the apartment. My dates are: ";
const whatsappEnquiryQuery = `?text=${encodeURIComponent(whatsappEnquiryText)}`;
export const contact = { whatsapp: { uk: { number: "+44 7962 356853", link: `https://wa.me/447962356853${whatsappEnquiryQuery}` }, nigeria: { number: "+234 708 919 1951", link: `https://wa.me/2347089191951${whatsappEnquiryQuery}` } } };

const apartmentOneAmenities = [
  { icon: "wifi", title: "Fast WiFi", detail: "100 Mbps" }, { icon: "kitchen", title: "Fully Equipped Kitchen", detail: "Cook, dine and settle in" },
  { icon: "ac", title: "AC in All Rooms", detail: "Comfort throughout" }, { icon: "tv", title: "Smart TV + Netflix", detail: "Easy nights in" },
  { icon: "parking", title: "Free Parking", detail: "Convenient on-site parking" }, { icon: "security", title: "24/7 Security & CCTV", detail: "Peace of mind, day and night" },
  { icon: "workspace", title: "Dedicated Workspace", detail: "Settle in and get work done" }
];
const galleryMeta = [
  ["bedroom-1-a.jpg","Bedroom 1","Master · TV wall","Master bedroom TV wall"], ["bedroom-1-b.jpg","Bedroom 1","Master · Bed side","Master bedroom bed side"],
  ["bedroom-2-a.jpg","Bedroom 2","TV wall","Second bedroom TV wall"], ["bedroom-2-b.jpg","Bedroom 2","Bed side","Second bedroom bed side"],
  ["bathroom-1-a.jpg","Master En-suite","Bathtub","Master ensuite bathtub"], ["bathroom-1-b.jpg","Master En-suite","Basin","Master ensuite wash basin"],
  ["bathroom-2.jpg","Second Bathroom","Shower","Second bathroom shower"], ["living-room.jpg","Living Room","Lounge","Tolu's Space living room"],
  ["kitchen.jpg","Kitchen","Fully equipped","Tolu's Space kitchen"], ["dining.jpg","Dining Area","Dining","Tolu's Space dining area"]
];
const apartmentOneGallery = galleryMeta.map(([file,title,caption,alt]) => ({file,title,caption,alt}));
const apartmentTwoGallery = galleryMeta.map(([file,title]) => ({file,title,caption:"Photo coming soon",alt:`Apartment 2 ${title} placeholder`}));
const apartmentOneAbout = { intro:"TOLU SPACE is a thoughtfully designed 2-bedroom apartment in the heart of Soluyi, Gbagada. Natural light, minimalist decor, fully equipped kitchen, serene balcony, and 24/7 security. Perfect for business travelers, couples, and staycations seeking comfort and style.", story:"Tolu's Space is a quietly considered short-let in the heart of Soluyi, Gbagada — natural light, minimalist decor, a fully equipped kitchen, and 24/7 security. Built for business travellers, couples, and slow weekends.", team:"Owned and managed by the Tolu's Space team; direct host contact via WhatsApp.", values:["Serenity","Considered design","Full-service hosting"] };
const apartmentTwoAbout = { intro:"Apartment 2 is the second Tolu's Space apartment. Its full description and property details will be added when the apartment information is ready.", story:"Apartment 2 is being prepared for the Tolu's Space collection. Real property details, description and amenities will be added here without changing the site's structure.", team:"Owned and managed by the Tolu's Space team; direct host contact via WhatsApp.", values:["Serenity","Considered design","Full-service hosting"] };

export const apartments = {
  "1": { id:"1", name:"Apartment 1", displayName:"TOLU SPACE", headline:"Stylish 2BR in Soluyi, Gbagada", subheadline:"Your calm in the chaos of Lagos. Modern, Minimalist, Fully Serviced.", address:"No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos", mapsQuery:"No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos", nightlyRate:null, rateCurrency:"₦", rateNote:"Nightly and extended-stay rates available on request", bookingFootnote:"Fastest response — direct booking, no service fees", heroImage:"bedroom-1-a.jpg", description:apartmentOneAbout.intro, about:apartmentOneAbout, amenities:apartmentOneAmenities, gallery:apartmentOneGallery },
  "2": { id:"2", name:"Apartment 2", displayName:"TOLU SPACE · APARTMENT 2", headline:"A second space in the Tolu's Space collection", subheadline:"Property details and real photos are coming soon.", address:"Address coming soon", mapsQuery:"", nightlyRate:null, rateCurrency:"₦", rateNote:"Nightly and extended-stay rates available on request", bookingFootnote:"Contact the host for Apartment 2 details", heroImage:"bedroom-1-a.jpg", description:apartmentTwoAbout.intro, about:apartmentTwoAbout, amenities:apartmentOneAmenities.map(item=>({...item,detail:"Details coming soon"})), gallery:apartmentTwoGallery }
};
export const defaultApartmentId="1";
export function getApartment(id=defaultApartmentId){ return apartments[String(id)] || apartments[defaultApartmentId]; }
export const about=apartmentOneAbout;
export const amenities=apartmentOneAmenities;
export const gallery=apartmentOneGallery;
export const navItems=[{label:"Home",path:"/"},{label:"Gallery",path:"/gallery"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"}];
export const whatsappUrl = contact.whatsapp.nigeria.link;
