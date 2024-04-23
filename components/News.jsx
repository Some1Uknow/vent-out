'use client'
import { useEffect, useState } from 'react';

const News = () => {
  const [articles, setArticles] = useState([
    {
      title: 'Sample Article 1',
      description: 'This is a sample article description 1.',
      url: 'https://example.com/article1',
    },
    {
      title: 'Sample Article 2',
      description: 'This is a sample article description 2.',
      url: 'https://example.com/article2',
    },
  ]);

  // Comment out the API call and useEffect hook cuz the API isnt working in production app
  // const getNews = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://newsapi.org/v2/everything?q=depression&sortBy=relevancy&totalResults=20&page=2&pageSize=7&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  //     );
  //     const data = await res.json();
  //     setArticles(data.articles);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };

  // useEffect(() => {
  //   getNews();
  // }, []);

  return (
    <section className="shadow-md rounded-lg m-4 ml-1 p-3 w-72 max-w-full h-max bg-white">
      <h1 className="text-xl font-bold p-1">Health News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="flex flex-col m-1 p-1 text-sm">
            <a href={article.url} className="font-bold hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <span className="text-gray-500 text-xs">{article.description.slice(0,75)}...</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
