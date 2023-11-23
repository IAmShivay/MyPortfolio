import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      console.log(data); // Log the data to inspect its structure
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">In Business,<span>Design Matters</span> <br />Crafting Success, <span>With Visual Excellence.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            className="app__profile-item"
          >
            {about.imgUrl && (
              about.imgUrl._ref ? (
                <img src={urlFor(String(about.imgUrl._ref))} alt={about.title} />
              ) : (
                <img src={urlFor(String(about.imgUrl.asset._ref))} alt={about.title} />
                
              )
            )}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
