import { motion } from 'motion/react';
import { useApartment } from './ApartmentContext';
import Icon from './Icons';
import './amenities.css';

export default function Amenities() {
  const { apartment } = useApartment();
  return <div className="amenities-grid">{apartment.amenities.map((item, index) => <motion.article key={item.title} className="amenity" whileHover={{ y: -4 }} transition={{ duration: .2 }}>
    <div className="amenity__icon"><Icon name={item.icon} size={25} /></div><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="amenity__index">0{index + 1}</span>
  </motion.article>)}</div>;
}
