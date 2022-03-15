import React from 'react';
import FakeButton from './FakeButton';
import Footer from './Footer';
import Header from './Header';
import Jobbe from './Jobbe';
import MainContent from './MainContent';
import Search from './Search';
import ToTop from './ToTop';

const NorwegianSchools: React.FC<{}> = () => (
  <>
    <Header />
    <Search />
    <FakeButton />
    <MainContent />
    <Jobbe />
    <Footer />
    <ToTop />
  </>
);

export default NorwegianSchools;
