import React from 'react';
import styled from 'styled-components';

const Jobbe: React.FC<{}> = () => (
  <StyledJobbe>
    <u>
      Interessert i å jobbe i Norge? Se våre ledige stillinger <b>her</b>.
    </u>
  </StyledJobbe>
);

const StyledJobbe = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.footerBlack};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Jobbe;
