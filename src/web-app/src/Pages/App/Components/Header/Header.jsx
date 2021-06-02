import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import logo from '../../../../Common/Components/images/logo192.png'
import { NavLink } from 'react-router-dom'
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar variant="dark" bg="link" collapseOnSelect={true} sticky="top" expand="lg">
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
                <Nav.Link as={NavLink} to="/users">Пользователи</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={NavLink} to="/boards">Мои доски</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={NavLink} to="/profile">Мой профиль</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/logout">Выйти</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header