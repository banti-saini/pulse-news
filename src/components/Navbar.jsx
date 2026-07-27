import React from 'react';

function Navbar({ theme, toggleTheme, isUsingFallback, setCategory }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top sticky-navbar shadow-sm">
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center fw-bold gap-2 text-primary fs-3" 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            setCategory('general'); 
          }}
        >
          <i className="bi bi-lightning-charge-fill text-warning"></i>
          <span className={theme === 'dark' ? 'text-white' : 'text-dark'}>Pulse</span>News
        </a>
        
        <div className="d-flex align-items-center gap-3 ms-auto">
          {/* API Status Badge */}
          <span className={`badge d-none d-sm-inline-flex align-items-center gap-1 py-2 px-3 rounded-pill ${isUsingFallback ? 'bg-danger-subtle text-danger border border-danger-subtle' : 'bg-success-subtle text-success border border-success-subtle'}`}>
            <span className={`spinner-grow spinner-grow-sm ${isUsingFallback ? 'text-danger' : 'text-success'}`} role="status"></span>
            {isUsingFallback ? 'Offline Mode (Mock Data)' : 'Live API Connected'}
          </span>

          {/* Premium Theme Switcher Button */}
          <button 
            className="theme-switch-btn" 
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill text-warning"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-primary"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
