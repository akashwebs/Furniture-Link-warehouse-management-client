import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Furniture Link</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {/* <Nav.Link href="">Furnitures</Nav.Link> */}
                            
                        </Nav>
                        <Nav>
                           {
                               user?.email && <> <Nav.Link as={Link} to="ManageProduct">Manage Inventory</Nav.Link>
                               <Nav.Link as={Link} to="addItmes">Add Items</Nav.Link>
                               <Nav.Link as={Link} to="myitem">My Items</Nav.Link></>
                           }
                            {
                            user ?
                                <button className='btn btn-link text-decoration-none' onClick={()=>signOut(auth)}>Log Out</button>
                                :
                                <Nav.Link as={Link} to='login'>
                                    Login
                                </Nav.Link>
                        }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;