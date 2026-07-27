import React from 'react';

function Footer({ articlesCount }) {
  return (
    <footer className="bg-body-tertiary border-top py-4 mt-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-muted small">
            &copy; {new Date().getFullYear()} <strong>PulseNews</strong>. Coded with React &amp; Bootstrap.
          </div>
          
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">
              Data loaded: <strong>{articlesCount}</strong> {articlesCount === 1 ? 'article' : 'articles'}
            </span>
            <span className="text-muted">|</span>
            <a href="https://gnews.io" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted small hover-primary">
              Powered by GNews API
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
