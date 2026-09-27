import { site, whatsappUrl } from '../data/content';
import Button from './Button';
import './booking.css';

export default function BookingCTA() {
  const { apartment } = useApartment();
  const rateText = apartment.nightlyRate ? `${apartment.rateCurrency}${apartment.nightlyRate.toLocaleString()} per night` : 'Rate available on request';
  return <section className="booking-card">
    <div><p className="eyebrow">Book your stay</p><h2>Make space for a slower Lagos stay.</h2><p>{apartment.rateNote}</p></div>
    <div className="booking-card__side"><div className="booking-card__rate"><span>From</span><strong>{rateText}</strong></div><Button href={whatsappUrl} icon="phone">Book on WhatsApp</Button><small>{apartment.bookingFootnote}</small></div>
  </section>;
}
