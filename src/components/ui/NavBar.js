import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { AuthButton } from './AuthButton';

const NavBar = () => (
  <>
  <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="/">Testing the 8base with React! <span>❤️</span></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      
      <Navbar.Text>
        <Nav.Link href="/">Home</Nav.Link>
      </Navbar.Text>

      <Navbar.Text>
        <Nav.Link href="/tasks">Tasks</Nav.Link>
      </Navbar.Text>
      
      <Navbar.Text>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Navbar.Text>

      <Navbar.Text>
        <AuthButton />
      </Navbar.Text>

    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
);

export { NavBar };
