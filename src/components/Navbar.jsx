import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { navItems, site, whatsappUrl } from '../data/content';
import Icon from './Icons';
import Button from './Button';
import './navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap">
    <div className="container nav">
      <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Tolu's Space home">
        <img src="/images/logo.jpg" alt="Tolu's Space" className="brand__logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <span className="brand__fallback">TOLU <em>SPACE</em></span>
      </Link>
      <nav className="nav__links" aria-label="Primary navigation">
        {navItems.map((item) => <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}
      </nav>
      <div className="nav__apartment"><ApartmentSelector /></div><div className="nav__action"><Button href={whatsappUrl} icon="phone">Book a stay</Button></div>
      <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}><Icon name={open ? 'close' : 'menu'} /></button>
    </div>
    <AnimatePresence>
      {open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
        <div className="container mobile-menu__inner">
          {navItems.map((item) => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
          <Button href={whatsappUrl} icon="phone">Book a stay</Button>
        </div>
      </motion.div>}
    </AnimatePresence>
  </header>;
}
