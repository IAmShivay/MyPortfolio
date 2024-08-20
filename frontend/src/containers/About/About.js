import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [selectedAbout, setSelectedAbout] = useState(null);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  const truncate = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + '...';
  };

  return (
    <section className="app__about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        In Business, <span className="highlight">Design Matters</span>
        <br />
        Crafting Success, <span className="highlight">With Visual Excellence.</span>
      </motion.h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            className="profile-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="image-container">
              {about.imgUrl && (
                <img 
                  src={urlFor(about.imgUrl._ref || about.imgUrl.asset._ref).url()} 
                  alt={about.title} 
                />
              )}
            </div>
            <div className="content">
              <h3 className="title">{about.title}</h3>
              <p className="description">{truncate(about.description, 100)}</p>
              <button className="read-more" onClick={() => setSelectedAbout(about)}>
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAbout && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="popup-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3>{selectedAbout.title}</h3>
              <p>{selectedAbout.description}</p>
              <button onClick={() => setSelectedAbout(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;