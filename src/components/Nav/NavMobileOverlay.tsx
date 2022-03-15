import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menuList from './menu';

type NavMobileOverlayProps = {
  drawerOpen: Boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobileOverlay: React.FC<NavMobileOverlayProps> = ({
  drawerOpen,
  setDrawerOpen
}: NavMobileOverlayProps) => (
  <OptionsM drawerOpen={drawerOpen}>
    {menuList.map(menu => (
      <li key={menu.label}>
        <NavLink to={menu.href} onClick={() => setDrawerOpen(false)}>
          {menu.label}
        </NavLink>
      </li>
    ))}
  </OptionsM>
);

const OptionsM = styled.div<{ drawerOpen: Boolean }>`
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.orange};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0px;
  height: calc(95% - 65px);
  top: 70px;
  width: 100%;
  transform: ${props =>
    props.drawerOpen ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in;

  li {
    line-height: 1.7;
    padding: 3px 0;
    list-style: none;
    font-size: ${props => props.theme.fontSize[0]};
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.orange};
    }
    .active {
      color: ${props => props.theme.colors.darkRed};
    }
  }
`;

export default NavMobileOverlay;
