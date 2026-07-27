import React from 'react';

function Footer({ articlesCount }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-body-tertiary border-top py-4 mt-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-muted small order-3 order-md-1">
            &copy; {new Date().getFullYear()} <strong>PulseNews</strong>. Coded with React &amp; Bootstrap.
          </div>
          
          <div className="order-1 order-md-2">
            <button 
              className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-2"
              onClick={scrollToTop}
              title="Scroll to top"
            >
              <i className="bi bi-arrow-up"></i>
              Back to Top
            </button>
          </div>
          
          <div className="d-flex align-items-center gap-3 order-2 order-md-3">
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
