import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import logo from '../../../../Common/Components/images/logo192.png'
import { NavLink } from 'react-router-dom'
import React from "react";

const Header = () => {
  return (
    <Navbar collapseOnSelect={true} sticky="top" expand="lg">
      <Container>
        <Navbar.Brand className="header-brand" as={NavLink} to="/">
          <img
            src={logo}
            alt="Logo"
            height="30"
            width="30"
            className="d-inline-block align-top"
          /> Bug tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={NavLink} to="/companies">Companies</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={NavLink} to="/boards">Boards</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={NavLink} to="/profile">My profile</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/logout">Logout!</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header