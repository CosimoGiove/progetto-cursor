import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: var(--dark-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  color: var(--light-color);
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: var(--light-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Il Mio Sito</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Chi Siamo</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
