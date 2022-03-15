import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { setInput, setPage } from '../../slice/norwegianSchoolsSlice';

const Search: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledSearch>
      <div>
        <input
          type="text"
          placeholder="Skolens navn"
          onChange={e => {
            dispatch(setInput(e.target.value.toLowerCase()));
            dispatch(setPage(0));
          }}
        />
        <div>SØK</div>
      </div>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  margin: 30px;
  height: 60px;
  display: flex;

  div {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    input {
      width: 1100px;
      height: 50px;
      font-size: 20px;
      border: 1px solid ${props => props.theme.colors.borderGray};
      padding-left: 18px;
    }
    div {
      width: 80px;
      height: 50px;
      background-color: ${props => props.theme.colors.backgroundGray};
      border: 1px solid ${props => props.theme.colors.borderGray};
      font-weight: 600;
      color: ${props => props.theme.colors.black};
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: not-allowed;
      }
    }
  }
`;

export default Search;
