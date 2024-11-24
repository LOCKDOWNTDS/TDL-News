import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MyCard from "../Components/Card";
import '../style/NewsComponent.css';
import '../style/search.css';
import { Container, Row, Col } from "react-bootstrap";

const SearchResult = () => {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const nav = useNavigate(); 
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSIO_API_KEY}&q=${query}&language=en`
          );
          if (!response.ok) throw new Error("fetch error:");
          const data = await response.json();
          setArticles(data.results || []); 
        } catch (error) {
          console.error("fetch error:", error);
        }
      };
      fetchNews();
    }
  }, [query]);

  const ToDetails = (article) => {
    nav("/details", { state: article });
  };

  function truncateText(text, maxLength) {
    if (!text) return ""; 
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }

  function CardMaker(prop) {
    return (
      <MyCard
        width={"80%"}
        src={prop.urlToImage}
        name={prop.title}
        text={truncateText(prop.description, 164)}
        onClick={() => ToDetails(prop.onClick)} 
      />
    );
  }

  return (
    <>
      <Container fluid>
  <Row
    style={{
      backgroundColor: "black",
      backgroundImage: `url('/src/assets/shattered-dark.png')`,
      minHeight: "100vh", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {articles.length > 0 ? (
      articles.map((article, index) => (
        <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
          <CardMaker
            urlToImage={article.image_url}
            title={article.title}
            description={article.description}
            onClick={article} 
          />
        </Col>
      ))
    ) : (
      <div className="notFoundContainer text-center">
        <div className="notFoundIcon">🔍</div>
        <p className="notFoundResult">
          We could not find any news for <strong>{query}</strong>.
        </p>
        <p className="notFoundSuggestion">Try searching for something else!</p>
      </div>
    )}
  </Row>
</Container>

    </>
  );
};

export default SearchResult;
