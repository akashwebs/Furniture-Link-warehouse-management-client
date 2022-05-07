import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Furniture Link</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="pricing">Furnitures</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="ManageProduct">Manage Inventory</Nav.Link>
                            <Nav.Link as={Link} to="addItmes">Add Items</Nav.Link>
                            <Nav.Link as={Link} to="myitem">My Items</Nav.Link>
                            <Nav.Link as={Link} to="login">login</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;