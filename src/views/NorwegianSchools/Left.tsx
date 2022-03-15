import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { setPage } from '../../slice/norwegianSchoolsSlice';

type LeftProps = {
  value: string;
  select: string;
  handleChange: (val: string) => void;
};

const Left: React.FC<LeftProps> = ({
  value,
  select,
  handleChange
}: LeftProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledLeft
      onClick={() => {
        handleChange(value);
        dispatch(setPage(0));
      }}
    >
      <div className="select">{select}</div>
      <div className="arrow">&gt;</div>
    </StyledLeft>
  );
};

const StyledLeft = styled.div`
  height: 52px;
  padding: 0 10px;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    background-color: ${props => props.theme.colors.backgroundGray};
    cursor: pointer;
  }

  .select {
    color: ${props => props.theme.colors.black};
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .arrow {
    color: ${props => props.theme.colors.borderGray};
    display: flex;
    justify-items: center;
    align-items: center;
  }
`;

export default Left;
