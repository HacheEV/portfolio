import React from 'react';
import './projects.css';
import news from '../../images/news.png';
import api from '../../images/api.png';
import crypto from '../../images/crypto.png';
import meal from '../../images/meal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faGithub,
  faHtml5,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects! 📂</h1>
      <div className="one-project">
        <div>
          <img src={news} alt="news" />
        </div>
        <div className="content">
          <h2>News app!</h2>
          <p>
            A news app, that you can search some news by topic or something
            trend!
          </p>
          <p>Using simple components in React but login with Google Auth!</p>
          <div className="checks">
            <button>
              <a href="https://hachev-news.netlify.app/">Check it out!</a>
            </button>
            <button>
              <a href="https://github.com/HacheEV/portfolio-news-react">
                Github
              </a>
            </button>
          </div>
        </div>

        <div className="tools">
          <h2>Tools</h2>
          <div className="languages">
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <FontAwesomeIcon className="icon" icon={faCss3} />
            <FontAwesomeIcon className="icon" icon={faReact} />
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <img src={api} alt="api" />
          </div>
        </div>
      </div>
      <div className="one-project">
        <div>
          <img src={crypto} alt="news" />
        </div>
        <div className="content">
          <h2>Crypto Quote App!</h2>
          <p>
            An instant crypto quote app, that you can verify the quote between
            top four currency and the most popular cryptos at the moment!
          </p>
          <p>Using React hooks, custom hooks and styled components!</p>
          <div className="checks">
            <button>
              <a href="https://hachev-crypto.netlify.app/">Check it out!</a>
            </button>
            <button>
              <a href="https://github.com/HacheEV/portfolio-crypto">Github</a>
            </button>
          </div>
        </div>

        <div className="tools">
          <h2>Tools</h2>
          <div className="languages">
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <FontAwesomeIcon className="icon" icon={faCss3} />
            <FontAwesomeIcon className="icon" icon={faReact} />
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <img src={api} alt="api" />
          </div>
        </div>
      </div>
      <div className="one-project">
        <div>
          <img src={meal} alt="news" />
        </div>
        <div className="content">
          <h2>Recipe search engine!</h2>
          <p>
            A search engine of meals, which you can look for recipe by
            ingredients or category!
          </p>
          <p>
            A React app, using the previous items and adding useContext and a
            Modal from a library!
          </p>
          <div className="checks">
            <button>
              <a href="https://hachev-meal-app.netlify.app/">Check it out!</a>
            </button>
            <button>
              <a href="https://github.com/HacheEV/portfolio-meal-context">
                Github
              </a>
            </button>
          </div>
        </div>

        <div className="tools">
          <h2>Tools</h2>
          <div className="languages">
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <FontAwesomeIcon className="icon" icon={faCss3} />
            <FontAwesomeIcon className="icon" icon={faReact} />
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <img src={api} alt="api" />
          </div>
        </div>
      </div>
      <div className="coming">
        <p>More projects coming soon...</p>
      </div>
    </div>
  );
};

export default Projects;
