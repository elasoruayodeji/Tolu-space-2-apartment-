import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Icon from './Icons';

export default function Button({ children, to, href, variant = 'primary', icon = 'arrow', target, onClick, type = 'button' }) {
  const className = `button button--${variant}`;
  const content = <><span>{children}</span>{icon && <Icon name={icon} size={18} />}</>;
  const props = { className, onClick, whileHover: { y: -2 }, whileTap: { scale: 0.98 }, transition: { duration: 0.18 } };
  if (to) return <motion.div {...props}><Link to={to}>{content}</Link></motion.div>;
  if (href) return <motion.div {...props}><a href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>{content}</a></motion.div>;
  return <motion.button {...props} type={type}>{content}</motion.button>;
}
