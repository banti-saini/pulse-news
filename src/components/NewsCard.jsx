import React from 'react';

function NewsCard({ article, onReadDetails, formatDate }) {
  return (
    <div className="col animate-fade-in">
      <div className="card news-card bg-body-tertiary">
        
        {/* Image Frame */}
        <div className="card-img-wrapper">
          <img 
            src={article.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80'} 
            className="news-card-img" 
            alt={article.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80';
            }}
          />
          <span className="badge bg-dark bg-opacity-75 text-white position-absolute bottom-0 start-0 m-3 px-3 py-1.5 rounded-pill backdrop-blur fs-7">
            {article.source?.name || 'News Source'}
          </span>
        </div>

        {/* Content Card Body */}
        <div className="card-body d-flex flex-column p-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="text-muted small d-flex align-items-center gap-1">
              <i className="bi bi-calendar3"></i>
              {formatDate(article.publishedAt)}
            </span>
          </div>
          
          <h5 className="card-title fw-bold line-clamp-2 mb-3 text-body-emphasis" title={article.title}>
            {article.title}
          </h5>
          
          <p className="card-text text-muted small line-clamp-3 mb-4 flex-grow-1">
            {article.description || 'No description available for this headline.'}
          </p>
          
          <button 
            className="btn btn-outline-primary rounded-pill w-100 mt-auto py-2 d-flex align-items-center justify-content-center gap-2"
            onClick={() => onReadDetails(article)}
          >
            Read Details
            <i className="bi bi-arrow-right-short fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
