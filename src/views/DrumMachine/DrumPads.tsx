// eslint-disable-next-line import/extensions
import React, { useEffect } from 'react';
import styled from 'styled-components';
// @ts-ignore
import sounds from '../../assets/sounds';
import { ISources } from './sources';

type DrumPadsProps = ISources & {
  handleDisplay: (label: ISources['label'] | 'Click or Press a Key') => void;
};

const DrumPads: React.FC<DrumPadsProps> = ({
  label,
  letter,
  handleDisplay
}: DrumPadsProps) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key.toUpperCase() === letter) {
      playAudio();
    }
  };

  const playAudio = async () => {
    // eslint-disable-next-line global-require
    const sound = sounds[label.replace('-', '')];
    const audio = new Audio(sound);
    await audio.play();
    handleDisplay(label);
  };

  return (
    <StyledPads onClick={playAudio}>
      <h1>{letter}</h1>
    </StyledPads>
  );
};

const StyledPads = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  height: 80px;
  width: 80px;
  border: 1px solid gray;
  background-color: #f0e68c;
`;

export default DrumPads;
