import React, { useState, useEffect } from 'react';
import { mockData } from './mockData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import NewsGrid from './components/NewsGrid';
import ArticleModal from './components/ArticleModal';
import Footer from './components/Footer';

// Available categories supported by GNews API
const CATEGORIES = [
  { id: 'general', name: 'General', icon: 'bi-grid-fill' },
  { id: 'world', name: 'World', icon: 'bi-globe' },
  { id: 'nation', name: 'Nation', icon: 'bi-flag-fill' },
  { id: 'business', name: 'Business', icon: 'bi-briefcase-fill' },
  { id: 'technology', name: 'Technology', icon: 'bi-cpu-fill' },
  { id: 'entertainment', name: 'Entertainment', icon: 'bi-film' },
  { id: 'sports', name: 'Sports', icon: 'bi-trophy-fill' },
  { id: 'science', name: 'Science', icon: 'bi-flask' },
  { id: 'health', name: 'Health', icon: 'bi-heart-pulse-fill' },
];

function App() {
  // Theme state: default to dark for premium look, persist in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fetch articles on category change
  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);
    setIsUsingFallback(false);
    try {
      // Fetch news from GNews API
      const apiKey = 'a18ba5bd7392d64601972611a88c8beb';
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load news (status code: ${response.status}). Loading offline preview data.`);
      }
      
      const data = await response.json();
      
      if (data.errors) {
        throw new Error(data.errors[0] || 'API Error. Loading offline preview data.');
      }

      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        throw new Error('No articles found in API response. Loading offline preview data.');
      }
    } catch (err) {
      console.warn('API error encountered, switching to local mock data:', err.message);
      setError(err.message);
      
      // Fallback: Populate with mock data
      setArticles(mockData.articles);
      setIsUsingFallback(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle Theme between Light & Dark
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Format Date to local readable string
  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateString;
    }
  };

  // Local filtering of articles based on search query
  const filteredArticles = articles.filter(article => {
    const query = searchQuery.toLowerCase();
    const titleMatch = article.title?.toLowerCase().includes(query) || false;
    const descMatch = article.description?.toLowerCase().includes(query) || false;
    const sourceMatch = article.source?.name?.toLowerCase().includes(query) || false;
    return titleMatch || descMatch || sourceMatch;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setCategory('general');
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      
      {/* Sticky Header component */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        isUsingFallback={isUsingFallback} 
        setCategory={setCategory} 
      />

      {/* Main Content Area */}
      <main className="container my-4 flex-grow-1">
        
        {/* Elegant Hero Section component */}
        <Hero isUsingFallback={isUsingFallback} />

        {/* Filters and Search Bar Component */}
        <Filters 
          categories={CATEGORIES}
          category={category}
          setCategory={setCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Loading Spinner or Grid Content */}
        {isLoading ? (
          <div className="d-flex flex-column align-items-center justify-content-center py-5 my-5">
            <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted fw-medium">Syncing latest stories...</p>
          </div>
        ) : (
          <NewsGrid 
            articles={filteredArticles}
            onReadDetails={setSelectedArticle}
            formatDate={formatDate}
            onReset={resetFilters}
          />
        )}
      </main>

      {/* Modal - Article Detail View Component */}
      <ArticleModal 
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        formatDate={formatDate}
      />

      {/* Footer Component */}
      <Footer articlesCount={filteredArticles.length} />

    </div>
  );
}

export default App;
