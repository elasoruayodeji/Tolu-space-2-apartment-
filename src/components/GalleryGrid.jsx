import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useApartment } from './ApartmentContext';
import './gallery.css';

export default function GalleryGrid({ preview = false }) {
  const { apartment } = useApartment();
  const items = preview ? apartment.gallery.slice(0, 6) : apartment.gallery;
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <motion.button
            key={item.file}
            className={`gallery-card gallery-card--${index + 1}`}
            onClick={() => setSelected(item)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={`/images/${apartment.folder}/${item.file}`}
              alt={item.alt}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            <span className="gallery-card__caption">
              <strong>{item.title}</strong>
              <small>{item.caption}</small>
            </span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="lightbox__inner"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox__close"
                onClick={() => setSelected(null)}
                aria-label="Close image"
              >
                ×
              </button>
              <img
                src={`/images/${apartment.folder}/${selected.file}`}
                alt={selected.alt}
              />
              <div className="lightbox__caption">
                <strong>{selected.title}</strong>
                <span>{selected.caption}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}