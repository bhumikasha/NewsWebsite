import React from 'react';
import ReactDOM from 'react-dom';
import NewsPage from './pages/news-page';
import './index.css';

const App = () => {
  return (
    <div>
          <NewsPage></NewsPage>
    </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));