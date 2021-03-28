import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>
          You can contact me at hector.evalverde@gmail.com if you prefer or in
          my social media!
        </h5>
      </div>
      <div>
        <a href="https://github.com/HacheEV">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a href="https://twitter.com/hache_ev">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/hector-esquerdo-valverde-8543131a6/">
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
