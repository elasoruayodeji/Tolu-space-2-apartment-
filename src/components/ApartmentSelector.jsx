import { motion } from 'motion/react';
import { apartments } from '../data/content';
import { useApartment } from './ApartmentContext';
import './apartment-selector.css';
export default function ApartmentSelector(){ const {id,setId}=useApartment(); return <div className="apartment-selector" aria-label="Choose apartment">{Object.values(apartments).map(a=><motion.button key={a.id} type="button" className={id===a.id?'active':''} onClick={()=>setId(a.id)} whileTap={{scale:.98}}>{a.name}</motion.button>)}</div>; }
