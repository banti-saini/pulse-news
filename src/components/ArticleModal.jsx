import React from 'react';

function ArticleModal({ article, onClose, formatDate }) {
  if (!article) return null;

  return (
    <div 
      className="modal show d-block custom-modal-backdrop" 
      tabIndex="-1" 
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered modal-lg" 
        role="document"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <div className="modal-content bg-body-tertiary">
          <div className="modal-header border-bottom-0 p-4 pb-0">
            <h5 className="modal-title fw-bold text-primary">Article Spotlight</h5>
            <button 
              type="button" 
              className="btn-close shadow-none" 
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          
          <div className="modal-body p-4 pt-2">
            <img 
              src={article.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80'} 
              className="img-fluid rounded-4 w-100 object-fit-cover mb-4 shadow-sm" 
              style={{ maxHeight: '380px' }}
              alt={article.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80';
              }}
            />
            
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill">
                {article.source?.name}
              </span>
              <span className="text-muted small">
                <i className="bi bi-clock me-1"></i>
                {formatDate(article.publishedAt)}
              </span>
            </div>

            <h3 className="fw-bold mb-3 text-body-emphasis">{article.title}</h3>
            
            <p className="lead fw-normal text-muted mb-4 fs-6">
              {article.description}
            </p>

            {article.content && (
              <div className="p-3 bg-body-secondary rounded-3 border-start border-primary border-3 mb-4">
                <p className="text-body small mb-0 font-monospace">
                  {article.content}
                </p>
              </div>
            )}
            
            <div className="d-flex flex-column flex-sm-row gap-2 mt-4 justify-content-end">
              <button 
                type="button" 
                className="btn btn-secondary rounded-pill px-4" 
                onClick={onClose}
              >
                Close
              </button>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary rounded-pill px-4 d-flex align-items-center justify-content-center gap-2"
              >
                Read Full News on {article.source?.name || 'Website'}
                <i className="bi bi-box-arrow-up-right small"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;
