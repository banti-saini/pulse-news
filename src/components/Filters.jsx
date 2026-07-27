import React from 'react';

function Filters({ categories, category, setCategory, searchQuery, setSearchQuery, selectedDate, setSelectedDate }) {
  return (
    <div className="row g-3 align-items-center mb-5 pb-3 border-bottom">
      <div className="col-12 col-lg-6 col-xl-6">
        {/* Scrollable Categories Pills Container */}
        <div className="d-flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`category-btn d-flex align-items-center gap-2 ${category === cat.id ? 'active' : ''}`}
            >
              <i className={`bi ${cat.icon}`}></i>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
        {/* Date Selector Input Box */}
        <div className="input-group rounded-pill overflow-hidden border">
          <span className="input-group-text bg-body-secondary border-0 px-3">
            <i className="bi bi-calendar-event text-muted"></i>
          </span>
          <input
            type="date"
            className="form-control bg-body-secondary border-0 py-2 shadow-none text-muted fw-medium"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>
      
      <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
        {/* Search Input Box */}
        <div className="input-group rounded-pill overflow-hidden border">
          <span className="input-group-text bg-body-secondary border-0 px-3">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control bg-body-secondary border-0 py-2 shadow-none"
            placeholder="Search loaded news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            className={`btn  border-0 px-3 ${searchQuery ? '' : 'invisible'}`} 
            onClick={() => setSearchQuery('')}
            type="button"
            disabled={!searchQuery}
          >
            <i className="bi bi-x-lg text-muted"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
