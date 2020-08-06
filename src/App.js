import React from 'react'

import './App.css'

import Header from './Components/Header'
import { useAxiosGet } from './Hooks/HttpRequests'

function App() {
  const path = '/wp-json/wp/v2/portfolio/';
  let portfolio = useAxiosGet(path);
  let content = null;

  if(portfolio.data){
    content = portfolio.data.map((post) => 
      <div>
        <h4>{post.title.rendered}</h4>
        <p>{post.acf.page__title_secondary}</p>
        <p>{post.content.rendered}</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <h3>Posts</h3>
      {content}
    </div>
  );
}

export default App;
