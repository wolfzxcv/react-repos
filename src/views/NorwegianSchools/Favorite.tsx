import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectNorwegianSchools,
  setShowList
} from '../../slice/norwegianSchoolsSlice';

type FavoriteProps = {
  favorite: boolean;
  markFavo: Function;
  id: string;
};

const Favorite: React.FC<FavoriteProps> = ({
  favorite,
  markFavo,
  id
}: FavoriteProps) => {
  const norwegianSchools = useAppSelector(selectNorwegianSchools);
  const dispatch = useAppDispatch();

  const showResult = norwegianSchools.mergeData
    .filter(x => x.isFavorite === true)
    .map(x => (
      <>
        <div className="county">
          {x.Navn}
          <FaHeart
            className="favorite"
            onClick={() => {
              markFavo(id);
            }}
          />
        </div>
        <div className="school">{x.FulltNavn}</div>
      </>
    ));

  // console.log(`showList boolean= `, showList);

  return (
    <StyledFavorite favorite={favorite}>
      <div
        className="toggle-list"
        onClick={() => dispatch(setShowList(!norwegianSchools.showList))}
      >
        My favorite list
      </div>
      <div className="favo-list">
        {norwegianSchools.showList === true && showResult}
      </div>
    </StyledFavorite>
  );
};

const StyledFavorite = styled.div<{ favorite: boolean }>`
  border-radius: 10px;
  position: fixed;
  top: 100px;
  right: 0px;
  z-index: 100;
  box-shadow: 0 1px 1px 1px rgba(50, 50, 50, 0.1);
  width: 250px;

  .toggle-list {
    color: white;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.green};
  }

  .favo-list {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.2;
    .county {
      border-top: 2px solid ${props => props.theme.colors.borderGray};
      color: #330000;
      display: flex;
      justify-content: space-between;
    }
    .favorite {
      color: ${props =>
        props.favorite ? 'red' : props.theme.colors.borderGray};
      &:hover {
        cursor: pointer;
      }
    }
    .school {
      color: ${props => props.theme.colors.black};
      font-weight: 200;
    }
  }
`;

export default Favorite;
