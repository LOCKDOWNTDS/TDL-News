import { useSearchParams } from "react-router-dom";
import NewsFeed from "../Components/NewsFeed";
import { Container, Row, Col } from "react-bootstrap";

function CategoryResult() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "top";

  return (
    <Container fluid>
      <Row style={{
            backgroundColor: "black",
            backgroundImage: `url('/src/assets/shattered-dark.png')`
          }}>
        <Col md={1}/>
        <Col md={10}
          >

          <NewsFeed category={category} />
        </Col>
        <Col md={1}/>
      </Row>
    </Container>
  );
}

export default CategoryResult;
