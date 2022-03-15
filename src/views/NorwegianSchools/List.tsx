import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

type ListProps = {
  id: string;
  favorite: boolean;
  markFavo: Function;
  countyName: string;
  fullname: string;
  email: string;
  character: string;
  type: string;
  basic: string;
};

const List: React.FC<ListProps> = ({
  id,
  favorite,
  markFavo,
  countyName,
  fullname,
  email,
  character,
  type,
  basic
}: ListProps) => (
  <StyledList favorite={favorite}>
    <div className="countyName">
      {countyName}
      <FaHeart className="favorite" onClick={() => markFavo(id)} />
    </div>
    <div>School Name: {fullname}</div>
    <div>E-mail: {email}</div>
    <div>Character: {character}</div>
    <div>Type: {type}</div>
    <div>Basic: {basic}</div>
  </StyledList>
);

const StyledList = styled.div<{ favorite: boolean }>`
  box-sizing: border-box;
  width: 350px;
  height: 200px;
  margin: 0 10px 20px 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: #fffff0;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  line-height: 1.5;

  .countyName {
    padding-right: 5px;
    font-size: 20px;
    color: #330000;
    display: flex;
    justify-content: space-between;
  }

  .favorite {
    color: ${props => (props.favorite ? 'red' : props.theme.colors.borderGray)};
    font-size: 22px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default List;
