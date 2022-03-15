import React from 'react';
import { FaThumbtack } from 'react-icons/fa';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { setIsAscending } from '../../slice/norwegianSchoolsSlice';

type FakeButtonProps = {};

const FakeButton: React.FC<FakeButtonProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledFakeButton>
      <div className="button1">VIS SKOLENS NAVN</div>
      <div onClick={() => dispatch(setIsAscending(true))} className="button">
        FRA A TIL Z
      </div>
      <div onClick={() => dispatch(setIsAscending(false))} className="button">
        FRA Z TIL A
      </div>
      <div className="button4">
        <FaThumbtack />
        MIN POSISJON
      </div>
    </StyledFakeButton>
  );
};

const StyledFakeButton = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  div {
    width: 270px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 14px;
  }

  .button1 {
    color: white;
    border: 2px solid ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.green};
    &:hover {
      cursor: not-allowed;
    }
  }

  .button {
    color: ${props => props.theme.colors.green};
    border: 2px solid ${props => props.theme.colors.green};
    &:hover {
      color: white;
      background-color: ${props => props.theme.colors.green};
      cursor: pointer;
    }
  }

  .button4 {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.backgroundGray};
    border: 1px solid ${props => props.theme.colors.borderGray};
    &:hover {
      cursor: not-allowed;
    }
  }
`;

export default FakeButton;
