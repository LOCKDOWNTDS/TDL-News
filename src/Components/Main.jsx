import 'bootstrap/dist/css/bootstrap.min.css';
import SportTen from "./SportTen";
import NewsFeed from "./NewsFeed";
import { Container, Row, Col } from 'react-bootstrap';


function Main() {
  return (
    <>
      <Container fluid>
  <Row>
    <Col
        className="d-none d-md-block"
        style={{
          backgroundColor: "black",
          backgroundImage: `url('/src/assets/shattered.png')`
          }}
          md={3}
          sm={6}
    >
    <SportTen />
  </Col>
    <Col style={{backgroundColor:"black",backgroundImage: `url('/src/assets/shattered-dark.png')`}} md={9} sm={6}>
      <NewsFeed category="top" />
    </Col>
  </Row>
</Container> 
    </>
  );
}

export default Main;
