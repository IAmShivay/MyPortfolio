import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-content">
        <motion.div
          className="app__header-info"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gradient-text">Hello, I'm Shivay</h1>
          <h2 className="typewriter">
            I'm a <span className="highlight">Full-Stack Developer</span>
          </h2>
          <p className="description">
            Specializing in Web Development, Game Development, Blockchain, and Social Media Management
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="button primary">View Projects</a>
            <a href="#contact" className="button secondary">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          className="app__header-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="image-container">
            <img src={images.profile} alt="Shivay" />
            <div className="backdrop"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="app__header-skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {[images.react, images.javascript, images.node, images.redux].map((skill, index) => (
          <motion.div
            key={`skill-${index}`}
            className="skill-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={skill} alt={`Skill ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;