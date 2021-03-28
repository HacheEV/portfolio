import React from 'react';
import image from '../../images/profile.jpg';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNode,
  faPhp,
  faGithub,
  faHtml5,
  faCss3,
  faJava,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  return (
    <div className="profile">
      <div className="info">
        <img src={image} alt="profile"></img>
        <div className="personal-data">
          <h1>Welcome to my personal site!</h1>
          <p>My name is Hector, I'm a junior full-stack developer!</p>
          <p>Let me show my lastest interests and projects</p>
        </div>
      </div>
      <div className="interests">
        <h2>Below you can see my prefered development stack: 👇 </h2>
        <div className="stack">
          <FontAwesomeIcon className="icon" icon={faHtml5} />
          <FontAwesomeIcon className="icon" icon={faCss3} />
          <FontAwesomeIcon className="icon" icon={faJsSquare} />
          <FontAwesomeIcon className="icon" icon={faReact} />
          <FontAwesomeIcon className="icon" icon={faNode} />
          <FontAwesomeIcon className="icon" icon={faPhp} />
          <FontAwesomeIcon className="icon" icon={faJava} />
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </div>
        <p>
          Anyway I'm opened to learn whatever new and exciting to improve my
          code!
        </p>
      </div>
    </div>
  );
};

export default Profile;
