import React, { useState } from 'react';
import styled from 'styled-components';
import DrumPads from './DrumPads';
import sources, { ISources } from './sources';

const DrumMachine: React.FC<{}> = () => {
  const [display, setDisplay] = useState('Click or Press a Key');

  const handleDisplay = (label: ISources['label'] | 'Click or Press a Key') =>
    setDisplay(label);

  return (
    <StyledDrumMachine>
      <StyledTitle>{display}</StyledTitle>
      <StyledDrums>
        {sources.map(d => (
          <DrumPads
            key={d.label}
            label={d.label}
            letter={d.letter}
            handleDisplay={handleDisplay}
          />
        ))}
      </StyledDrums>
    </StyledDrumMachine>
  );
};

const StyledDrumMachine = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #d2b48c;
  font-family: cursive;
`;

const StyledTitle = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
`;

const StyledDrums = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default DrumMachine;
