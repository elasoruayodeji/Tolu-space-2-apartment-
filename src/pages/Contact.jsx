import { contact } from '../data/content';
import { useApartment } from '../components/ApartmentContext';
import SectionReveal from '../components/SectionReveal';
import Location from '../components/Location';
import Button from '../components/Button';
import Icon from '../components/Icons';
import Seo from '../components/Seo';
import './contact.css';

export default function Contact() {
  const { apartment } = useApartment();

  return (
    <main>
      <Seo
        title="Contact"
        description={`Contact Tolu Space ${apartment.name} in Soluyi, Gbagada, Lagos.`}
      />
      <section className="section container">
        <SectionReveal>
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Ready when you are.</h1>
          <p className="lead">
            For availability, nightly rates, extended stays or any questions about {apartment.name},
            contact the host directly on WhatsApp.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="contact-grid">
            <a href={contact.whatsapp.nigeria.link} target="_blank" rel="noreferrer">
              <Icon name="phone" />
              <span>
                <small>WhatsApp · Nigeria</small>
                <strong>{contact.whatsapp.nigeria.number}</strong>
              </span>
            </a>
            <a href={contact.whatsapp.uk.link} target="_blank" rel="noreferrer">
              <Icon name="phone" />
              <span>
                <small>WhatsApp · UK</small>
                <strong>{contact.whatsapp.uk.number}</strong>
              </span>
            </a>
            <div>
              <Icon name="pin" />
              <span>
                <small>Address</small>
                <strong>{apartment.address}</strong>
              </span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.16}>
          <Button href={contact.whatsapp.nigeria.link} icon="phone">
            Start a booking enquiry
          </Button>
        </SectionReveal>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionReveal>
            <Location />
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}