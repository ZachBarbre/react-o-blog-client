import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './components/Blog.jsx'
import SingleBlog from './components/SingleBlog';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React-O-Blog
      </header>
      <Router>
        <Route path='/' exact component={Blog} />
        <Route path='/blog/:blogId?' component={SingleBlog} />
      </Router>
    </div>
  );
}

export default App;
