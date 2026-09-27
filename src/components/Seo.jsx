import { useEffect } from 'react';
import { site } from '../data/content';
import { useApartment } from './ApartmentContext';

export default function Seo({ title, description }) {
  const { apartment } = useApartment();
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} · ${apartment.name} — ${apartment.headline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description, apartment]);
  return null;
}
