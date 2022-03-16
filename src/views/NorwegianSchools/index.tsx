import React from 'react';
import styled from 'styled-components';
import FakeButton from './FakeButton';
import Footer from './Footer';
import Header from './Header';
import Jobbe from './Jobbe';
import MainContent from './MainContent';
import Search from './Search';
import ToTop from './ToTop';

const NorwegianSchools: React.FC<{}> = () => (
  <StyledNorwegianSchools>
    <Header />
    <Search />
    <FakeButton />
    <MainContent />
    <Jobbe />
    <Footer />
    <ToTop />
  </StyledNorwegianSchools>
);

const StyledNorwegianSchools = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default NorwegianSchools;
