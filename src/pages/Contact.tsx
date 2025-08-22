import React from 'react';

const Contact: React.FC = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">
        Contact <span className="text-secondary">Me</span>
      </h1>
      <h2 className="small-heading">This is how to reach me...</h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email:</span>{' '}
          <a href="mailto:1997kophyoe@gmail.com" style={{ textDecoration: 'none' }}>
            1997kophyoe@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
