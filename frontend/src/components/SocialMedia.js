import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/TscaRookie" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100015110501316" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/shivay___sharma/" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
