import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: 4rem;
  background-color: ${props => props.theme.colors.brightness_100};
  border-bottom: 1px solid ${props => props.theme.colors.brightness_80};
  display: flex;
  justify-content: center;
`;
const NavBrand = styled.a`
  padding-top: 0.7rem;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;
const A = ({ className, children }) => {
  return (
    <Link>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
};
const NavLink = styled.a`
  padding-top: 1.3rem;  
`;


export default class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <Nav>
        <Link passHref prefetch href="/">
          <NavBrand>GAMES</NavBrand>
        </Link>
      </Nav>
    );
  }
}