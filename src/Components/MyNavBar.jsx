import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../style/Navbar.css"

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`); 
    }
  };

  return (
    <Navbar expand="lg" className="navbar">
    <Container fluid>
      <Navbar.Brand href="/" className="navbar-brand">
        TDL NEWS
      </Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor: "#ffd700"}} aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="nav d-flex justify-content-center w-100">
          <NavLink to="/category?category=business" className="nav-link">
            Business
          </NavLink>
          <NavLink to="/category?category=sports" className="nav-link">
            Sport
          </NavLink>
          <NavLink to="/category?category=health" className="nav-link">
            Health
          </NavLink>
          <NavLink to="/category?category=science" className="nav-link">
            Science
          </NavLink>
          <NavLink to="/category?category=politics" className="nav-link">
            Politics
          </NavLink>
          <NavLink to="/category?category=technology" className="nav-link">
            Technology
          </NavLink>
          <NavLink to="/category?category=world" className="nav-link">
            World
          </NavLink>
          <NavLink to="/category?category=entertainment" className="nav-link">
            Entertainment
          </NavLink>
        </Nav>
        <Form className="navbar-form d-flex mx-auto me-1" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search for news"
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" className="btn">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default NavScrollExample;
