import React from 'react';
import NewsCard from './NewsCard';

function NewsGrid({ articles, onReadDetails, formatDate, onReset }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-5 my-5">
        <i className="bi bi-newspaper display-1 text-muted opacity-50 mb-3 d-block"></i>
        <h3 className="fw-bold">No articles found</h3>
        <p className="text-muted mx-auto" style={{ maxWidth: '400px' }}>
          We couldn't find any articles matching your search query. Try clearing filters or typing a different keyword.
        </p>
        <button className="btn btn-primary rounded-pill px-4 mt-3" onClick={onReset}>
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {articles.map((article, idx) => (
        <NewsCard
          key={article.id || idx}
          article={article}
          onReadDetails={onReadDetails}
          formatDate={formatDate}
        />
      ))}
    </div>
  );
}

export default NewsGrid;
