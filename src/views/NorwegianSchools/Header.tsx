import React from 'react';
import {
  FaBars,
  FaLeaf,
  FaMapMarkerAlt,
  FaSearch,
  FaUnlockAlt,
  FaUser,
  FaUtensils
} from 'react-icons/fa';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectNorwegianSchools } from '../../slice/norwegianSchoolsSlice';

const Header: React.FC<{}> = () => {
  const norwegianSchools = useAppSelector(selectNorwegianSchools);
  return (
    <StyledHeader>
      <div className="title normal">{norwegianSchools.select}</div>

      <div className="three normal">
        <a
          href="https://www.linkedin.com/in/alice-chou-169604186/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="underline">
            <FaMapMarkerAlt />
            LinkedIn
          </div>
        </a>

        <a
          href="https://github.com/wolfzxcv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaUtensils />
            GitHub
          </div>
        </a>

        <a
          href="https://codepen.io/nienyingchou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaLeaf />
            CodePen
          </div>
        </a>
      </div>

      <div className="member small">
        <a
          href="https://www.youtube.com/user/wolfzxcvb/videos?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaUnlockAlt />
            <span>YouTube kanal 1</span>
          </div>
        </a>

        <a
          href="https://www.youtube.com/user/naomichou/videos?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaUser />
            <span>YouTube kanal 2</span>
          </div>
        </a>
      </div>

      <div className="green normal">
        <a
          href="https://www.facebook.com/wolfzxcv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaSearch />
          </div>
        </a>

        <a
          href="https://www.instagram.com/nienyingchou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaBars />
          </div>
        </a>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  height: 79px;
  display: flex;
  flex: 1;
  color: ${props => props.theme.colors.black};
  font-weight: 400;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};

  .title {
    background-color: ${props => props.theme.colors.headerWhite};
    width: 340px;
    padding: 0 20px;
    font-size: 22px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    &:hover {
      color: ${props => props.theme.colors.green};
      cursor: not-allowed;
    }
  }

  .three {
    background-color: ${props => props.theme.colors.headerWhite};
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
    }

    .underline {
      color: ${props => props.theme.colors.green};
      border-bottom: 5px solid ${props => props.theme.colors.green};
    }

    div {
      display: flex;
      align-items: center;
      width: 140px;
      height: 100%;
      margin-right: 20px;
      &:hover {
        color: ${props => props.theme.colors.green};
        border-bottom: 5px solid ${props => props.theme.colors.green};
      }
    }
  }

  .member {
    background-color: ${props => props.theme.colors.headerWhite};
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    border-left: 1px solid #c2c2a3;
    padding-left: 10px;
    font-size: 14px;
    span {
      margin-left: 5px;
      &:hover {
        color: ${props => props.theme.colors.green};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .green {
    display: flex;
    flex: 1;
    background-color: ${props => props.theme.colors.green};
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: white;
      width: 80px;
      height: 79px;
      &:hover {
        background-color: ${props => props.theme.colors.darkGreen};
        cursor: pointer;
      }
    }
  }

  .normal {
    flex-grow: 7;
    flex-shrink: 1;
    flex-basis: 0%;
  }

  .small {
    flex-grow: 4;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`;

export default Header;
