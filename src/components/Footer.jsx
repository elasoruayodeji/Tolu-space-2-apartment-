import { Link } from 'react-router-dom';
import { site, navItems, whatsappUrl } from '../data/content';
import Button from './Button';
import './footer.css';

export default function Footer() {
  const { apartment } = useApartment();
  return <footer className="footer">
    <div className="container footer__grid">
      <div><p className="eyebrow">{site.tagline}</p><h2 className="footer__title">A calm place to land in Lagos.</h2></div>
      <div className="footer__column"><p className="footer__label">Explore</p>{navItems.map(item => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div>
      <div className="footer__column"><p className="footer__label">Contact</p><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a><a href={site.whatsapp}>WhatsApp</a><span>{apartment.address}</span></div>
      <div className="footer__cta"><Button href={whatsappUrl} icon="phone">Enquire on WhatsApp</Button></div>
    </div>
    <div className="container footer__bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Soluyi · Gbagada · Lagos</span></div>
  </footer>;
}
