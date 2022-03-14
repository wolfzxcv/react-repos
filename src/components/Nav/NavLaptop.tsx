import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menuList from './menu';

const NavLaptop: React.FC<{}> = () => (
  <StyledNavLaptop>
    <div>
      <img src="https://picsum.photos/80/50" alt="logo" />
      <h2>LAPTOP</h2>
    </div>

    <ul>
      {menuList.map(menu => (
        <li key={menu.label}>
          <NavLink to={menu.href}>{menu.label}</NavLink>
        </li>
      ))}
    </ul>
  </StyledNavLaptop>
);

const StyledNavLaptop = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) {
    > div {
      display: flex;
      align-items: center;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.theme.colors.orange};
    background: ${props => props.theme.colors.blue};

    ul {
      width: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      li {
        padding: 3px;
        list-style: none;
        font-size: ${props => props.theme.fontSize[1]};
        font-weight: bold;
        a {
          text-decoration: none;
          color: ${props => props.theme.colors.white};
        }
        .active {
          color: ${props => props.theme.colors.darkRed};
        }
      }
    }
  }
`;

export default NavLaptop;
