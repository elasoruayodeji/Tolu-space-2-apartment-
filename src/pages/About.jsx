import { site, contact } from '../data/content';
import { useApartment } from '../components/ApartmentContext';
import ApartmentSelector from '../components/ApartmentSelector';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';
import Seo from '../components/Seo';

export default function About() {
  const { apartment } = useApartment();
  const whatsappLink = contact.whatsapp.nigeria.link;

  return (
    <main>
      <Seo title="About" description="Learn about Tolu's Space, a considered short-let in Soluyi, Gbagada." />
      <section className="section container">
        <SectionReveal>
          <ApartmentSelector />
          <br /><br />
          <p className="eyebrow">The story</p>
          <h1 className="page-title">A quiet stay, considered down to the details.</h1>
        </SectionReveal>
        <div className="about-copy">
          <SectionReveal delay={0.08}>
            <p className="lead">{apartment.about.story}</p>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <div className="about-panels">
              <div>
                <p className="eyebrow">Managed by</p>
                <p>{apartment.about.team}</p>
              </div>
              <div>
                <p className="eyebrow">The promise</p>
                <p>{site.tagline}</p>
              </div>
              <div>
                <p className="eyebrow">Values</p>
                <div className="value-list">
                  {apartment.about.values.map((v) => <span key={v}>{v}</span>)}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
        <div style={{ marginTop: 'var(--space-7)' }}>
          <Button href={whatsappLink} icon="phone">Talk to the host</Button>
        </div>
      </section>
    </main>
  );
}
