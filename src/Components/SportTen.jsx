import { useEffect, useState } from 'react';
import MyCard from "./Card";
import { useNavigate } from 'react-router-dom';

const SportTen = () => {
    const [articles, setArticles] = useState([]);
    const nav =useNavigate();

  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSIO_API_KEY}&q=sport&language=en`
          );
          if (!response.ok) throw new Error("Failed to fetch news");
          const data = await response.json();
          setArticles((data.results || []).slice(0, 4));
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
      fetchNews();
    }, []);
    const ToDetails=(article)=>{
      nav("/details",{state:article})
    }

  function truncateText(text, maxLength) {
    if (!text) return ""; 
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }

  function CardMaker(prop) {
    return (
      <MyCard
        width={"70%"}
        src={prop.urlToImage}
        name={prop.title}
        text={truncateText(prop.description, 164)}
        onClick={() => ToDetails(prop.onClick)}
      />
    );
  }

  return (
    
    <div className="news-container">
    <h1 style={{ 
    fontFamily: "'Roboto Slab', serif", 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color:'white',
    marginTop:"40px"
  }}>Trend Sport</h1>

      {articles.map((article, index) => (
        <CardMaker
          key={index}
          urlToImage={article.image_url}
          title={article.title}
          description={article.description}
          onClick={article}
        />
      ))}
    </div>
  );
};

export default SportTen;
