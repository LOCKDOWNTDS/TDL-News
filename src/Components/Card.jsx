import Card from 'react-bootstrap/Card';
import "../style/BasicCard.css";
import defaultImage from "../assets/TDL-Brand.png";

function BasicCard(prop) {
  return (
    <Card 
      className="mb-4 mt-5 clickable-card" 
      style={{ 
        width: prop.width,
        cursor: prop.onClick ? "pointer" : "default", 
      }}
      onClick={prop.onClick} 
    >
      <Card.Img 
        variant="top" 
        src={prop.src ? prop.src : defaultImage} 
        alt="News Thumbnail" 
      />
      <Card.Body>
        <Card.Title>
          {prop.name}
        </Card.Title>
        <Card.Text>
          {prop.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
