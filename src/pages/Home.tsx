import React from 'react';

const Home: React.FC = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Si Thu <span className="text-secondary">Phyo</span>
      </h1>
      <h2 className="small-heading">Web Developer & Software Engineer</h2>
      <div className="icons">
        <a href="https://x.com/kophyoe1997" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/Ko.Phyoe.1997" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/si-thu-phyo-540a14172/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/PhyoeBlitz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </main>
  );
};

export default Home;
