import { site } from '../data/content';
import { useApartment } from '../components/ApartmentContext';
import ApartmentSelector from '../components/ApartmentSelector';
import GalleryGrid from '../components/GalleryGrid';
import SectionReveal from '../components/SectionReveal';
import Seo from '../components/Seo';

export default function Gallery() { const { apartment } = useApartment(); return <main><Seo title="Gallery" description="Explore all 10 spaces at Tolu's Space in Soluyi, Gbagada." /><section className="section container"><SectionReveal><ApartmentSelector /><br /><br /><p className="eyebrow">{apartment.name}</p><h1 className="page-title">Every corner, captured.</h1><p className="lead">A closer look at the bedrooms, bathrooms, living spaces, kitchen and dining area.</p></SectionReveal><div style={{marginTop:'var(--space-8)'}}><SectionReveal delay={.08}><GalleryGrid /></SectionReveal></div></section></main>; }
