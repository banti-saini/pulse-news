import React from 'react';

function Hero({ isUsingFallback }) {
  return (
    <div className="hero-glow p-5 mb-4 rounded-4 bg-body-tertiary border text-center shadow-sm">
      <div className="position-relative z-1">
        <span className="badge bg-primary px-3 py-2 rounded-pill mb-3 text-uppercase tracking-wider">Top Headlines</span>
        <h1 className="display-4 fw-extrabold mb-3">Stay Curious. Stay Ahead.</h1>
        <p className="lead mx-auto text-muted" style={{ maxWidth: '600px' }}>
          Explore curation of world-wide general events. Quick updates on topics that shape our global perspective.
        </p>
        
        {/* Informational banner about API free tier limit if using fallback */}
        {isUsingFallback && (
          <div className="alert alert-warning border-0 rounded-3 mt-4 mx-auto py-3 text-start" style={{ maxWidth: '750px' }}>
            <div className="d-flex gap-3">
              <i className="bi bi-exclamation-triangle-fill fs-4 text-warning"></i>
              <div>
                <h6 className="fw-bold mb-1">Demo Mode Activated</h6>
                <p className="small mb-0 text-muted">
                  We hit the GNews API limit or loaded offline. We are displaying high-quality mock news articles below so you can fully interact with the UI, search, details modal, and theme features.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
