import { site, whatsappUrl } from '../data/content';
import SectionReveal from '../components/SectionReveal';
import Location from '../components/Location';
import Button from '../components/Button';
import Icon from '../components/Icons';
import Seo from '../components/Seo';
import './contact.css';

export default function Contact() { return <main><Seo title="Contact" description="Contact Tolu's Space in Soluyi, Gbagada, Lagos." /><section className="section container"><SectionReveal><p className="eyebrow">Contact</p><h1 className="page-title">Ready when you are.</h1><p className="lead">For availability, nightly rates, extended stays or any questions about the apartment, contact the host directly.</p></SectionReveal><SectionReveal delay={.08}><div className="contact-grid"><a href={`tel:${site.phoneE164}`}><Icon name="phone" /><span><small>Phone</small><strong>{site.phoneDisplay}</strong></span></a><a href={site.whatsapp}><Icon name="phone" /><span><small>WhatsApp</small><strong>Message the host</strong></span></a><div><Icon name="pin" /><span><small>Address</small><strong>{apartment.address}</strong></span></div></div></SectionReveal><SectionReveal delay={.16}><Button href={whatsappUrl} icon="phone">Start a booking enquiry</Button></SectionReveal></section><section className="section section--tight"><div className="container"><SectionReveal><Location /></SectionReveal></div></section></main>; }
