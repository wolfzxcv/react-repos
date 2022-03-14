import React, { useState } from 'react';
import styled from 'styled-components';
import NavMobileOverlay from './NavMobileOverlay';

const NavMobile: React.FC<{}> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <StyledNavMobile>
      <div>
        <div>
          <img src="https://picsum.photos/80/50" alt="logo" />
        </div>

        <div>
          <h2>MOBILE</h2>
        </div>

        <Burger onClick={() => setDrawerOpen(!drawerOpen)}>
          <div className={drawerOpen ? 'line1' : ''} />
          <div className={drawerOpen ? 'line2' : ''} />
          <div className={drawerOpen ? 'line3' : ''} />
        </Burger>
      </div>
      <NavMobileOverlay drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </StyledNavMobile>
  );
};

const StyledNavMobile = styled.div`
  @media (max-width: 768px) {
    > div {
      &:nth-child(1) {
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.orange};
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Burger = styled.div`
  div {
    margin: 10px 0;
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.colors.orange};
    transition: all 1s ease;
  }

  .line1 {
    transform: rotate(-45deg) translate(-8px, 10px);
  }

  .line2 {
    opacity: 0;
  }

  .line3 {
    transform: rotate(45deg) translate(-8px, -10px);
  }
`;

export default NavMobile;
