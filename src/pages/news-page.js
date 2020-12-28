import React, { Component } from 'react';
import NEWS from '../json/news.json';
import logo from '../images/logo.png';

class NewsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: NEWS,
            filterNews: []
        }
    }

    handleSearch = (event) => {
        let keyword = event.target.value;
        let filterContent = this.state.news.articles.filter((news)=>{
            return news.title.indexOf(keyword)>-1
        })
        this.setState({
            filterNews: filterContent
        })
    }

  render() {
      let newsData = this.state.filterNews.length == 0 ? this.state.news.articles : this.state.filterNews;
        let newslist = newsData.map((news, index) => {
            return(
                <div className="newslist">
                    <div>
                        <img src={news.urlToImage} className="news-image"/>
                    </div>
                    <div className="newscol">    
                        <h3>{news.title}</h3>
                        <p>{news.description}</p>
                    </div>
                </div>
            )
        });
    return (
      <div className="container">
          <div className="header">
                <img className="logo-holder"src={logo}/>
              <div className="search">
                  <input type="text" placeholder="Search by news title.." className="searchBox" 
                  onChange={this.handleSearch}/>
              </div>
          </div>
          <div className="content">
              {newslist}
          </div>
      </div>
    );
  }
}

export default NewsPage;