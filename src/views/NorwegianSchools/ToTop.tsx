import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import { scrollToTop } from '../../utils';

const ToTop: React.FC<{}> = () => (
  <StyledToTop onClick={scrollToTop}>
    <FaArrowUp />
  </StyledToTop>
);

const StyledToTop = styled.div`
  font-size: 48px;
  color: ${props => props.theme.colors.green};
  font-weight: 700;
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

export default ToTop;
