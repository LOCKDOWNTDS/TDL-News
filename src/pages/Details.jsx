import { Card, Container, Row,Col, CardBody, CardText } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import defaultImage from "../assets/TDL-Brand.png";
import "../style/Details.css"; 
const Details=()=> {
  const location = useLocation();
  const article = location.state;
 
  return (
    <>
      <Container fluid style={{backgroundColor:"black",backgroundImage: `url('/src/assets/shattered-dark.png')`}}>
      <Row className="justify-content-center ">
        <Col md={12} className="position-relative modifiedRow"> 
          <img
              src={article.image_url? article.image_url:defaultImage}
              style={{ width: "100%", height:"100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              className="detail-image"

          />
          <div className="overlay-text">
              <h1>{article.title}</h1>
          </div>
          </Col>
       </Row>
       <Row>
        <Col md={3} sm={12} className="MidLeft">
            <Card style={{ borderRadius: "20px" }}>
          <CardBody style={{ padding: "10px 20px", color: "white" }}>
          <Row className="mb-3">
            <Col md={6} style={{ fontWeight: "bold", fontSize: "15px" }}>Source:</Col>
            <Col md={6} >{article.source_name}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={6} style={{ fontWeight: "bold", fontSize: "15px" }}>Creator:</Col>
            <Col md={6} >{article.creator? article.creator:"------------"}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} style={{ fontWeight: "bold", fontSize: "15px" }}>Pub Date:</Col>
            <Col md={6} >{article.pubDate}</Col>
          </Row>
          </CardBody>
            </Card>

        </Col>

        <Col md={9} sm={12} className="MidRight">
          <Card  style={{borderRadius:"20px"}}> 
            <CardBody >
              <CardText style={{color:"white",padding:"5px 5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo elit ipsum, ac dignissim velit dapibus vel. Cras vehicula, mauris quis lobortis sollicitudin, nibh nisi sagittis mi, maximus eleifend magna nibh ut tellus. Suspendisse et libero sit amet libero pellentesque volutpat non nec eros. Vivamus vehicula ipsum non posuere convallis. Quisque et hendrerit mi. Etiam nec vulputate tortor. In vel turpis mollis, elementum odio ullamcorper, molestie arcu. Maecenas luctus dignissim efficitur. Donec vestibulum suscipit sem. Nulla at mollis metus, eu congue justo. Pellentesque laoreet eleifend eros nec sollicitudin. Maecenas ac fringilla mauris. Nullam consectetur sit amet diam laoreet egestas.

Aliquam erat volutpat. Nunc fringilla posuere posuere. Aenean faucibus arcu quis pharetra fermentum. Sed vestibulum mauris velit, sagittis elementum orci dictum consequat. Aliquam vitae leo ut neque elementum fermentum. Sed quis pellentesque nulla. Etiam orci lorem, vulputate nec vehicula sed, imperdiet et risus.

Sed et varius ligula, in luctus ante. Integer ullamcorper sapien lorem, a maximus augue lobortis vitae. Cras sit amet leo sodales, venenatis nisi ac, fringilla purus. Donec ut nisl ullamcorper, consequat mauris quis, mattis odio. Sed elementum convallis eleifend. Sed id urna id nulla tempus convallis. Morbi varius scelerisque ornare. Pellentesque et dolor et purus ultricies bibendum sed lobortis metus. Etiam at erat urna. Proin consequat eros vitae enim venenatis porta. Nullam et mollis ante. Fusce arcu nulla, commodo a egestas id, finibus nec velit. Duis nec urna lorem. Nunc et magna orci. Cras efficitur fringilla ex, ac pellentesque nisl ornare sit amet. Vestibulum finibus urna lectus, at imperdiet nulla iaculis et.

Cras ullamcorper commodo dui quis interdum. Duis est nibh, mollis id justo ut, finibus pretium ex. Phasellus volutpat eu magna id auctor. Aenean facilisis, odio ac pharetra faucibus, tortor orci malesuada ante, vitae imperdiet mi diam ut purus. Vestibulum sem est, pulvinar at lacus eget, fringilla elementum neque. Nullam gravida porta enim. Praesent tempor hendrerit purus, eget fringilla quam condimentum eu. Integer auctor justo sed sem blandit, et volutpat mi pretium. Etiam ultricies mauris sit amet augue euismod finibus. Nullam in tortor et odio convallis aliquam at volutpat lacus. Nullam venenatis molestie lacus faucibus vulputate. Ut ac justo porttitor, faucibus libero eu, luctus dolor. Nullam eu tristique lectus.

In sagittis pharetra diam, sit amet bibendum metus blandit eu. Suspendisse purus eros, semper quis fermentum a, euismod at tellus. Aliquam vitae eros a justo sodales ornare eu quis massa. Duis id suscipit orci. Proin aliquet eu ligula sit amet egestas. Proin id leo massa. Nunc dapibus, purus eu aliquam molestie, nunc diam mollis metus, non porttitor magna libero a massa. Ut eu laoreet libero. Suspendisse interdum scelerisque dolor, sed dapibus elit. Fusce non eleifend lacus. Donec fringilla augue at tempus maximus.</CardText>
            </CardBody>
          </Card>
        </Col>
       </Row>
     
      </Container>
    </>
  )
}

export default Details
