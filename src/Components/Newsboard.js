import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

export default function Newsboard({category}) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5893643ddc1749c29d6545a10cfedf05`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest<span className="badge bg-danger">News...</span></h2>
            {articles.map((news, index) => (
                <Newsitem key={index} title={news.title} src={news.urlToImage} description={news.description} url={news.url}/>
            ))}
        </div>
    );
}
