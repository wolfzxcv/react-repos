import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchSchoolData,
  selectNorwegianSchools,
  setMergeData,
  setPage,
  setSelect
} from '../../slice/norwegianSchoolsSlice';
import Favorite from './Favorite';
import Left from './Left';
import List from './List';

const MainContent: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSchoolData());
  }, []);

  const norwegianSchools = useAppSelector(selectNorwegianSchools);

  // get county name as drop-down list
  const filterCountyList = norwegianSchools.mergeData.reduce(
    (eachData, countyName) => {
      // @ts-ignore
      eachData[countyName.Navn] = countyName.FylkeNr;
      return eachData;
    },
    []
  );
  // console.log(`county name: ISO-code`, filterCountyList.sort());

  const getCounty = Object.keys(filterCountyList).sort();

  // print out each county's school info + dymanic filter condition
  let resultArr;

  const { mergeData, isAscending, input, select, page } = norwegianSchools;

  const inputLength = input.trim().length;

  if (isAscending && inputLength === 0) {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .sort((a, b) => a.FulltNavn.localeCompare(b.FulltNavn));
  } else if (isAscending === false && inputLength === 0) {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .sort((a, b) => b.FulltNavn.localeCompare(a.FulltNavn));
  } else if (isAscending && inputLength > 0) {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .filter(x => x.FulltNavn.toLowerCase().includes(input))
      .sort((a, b) => a.FulltNavn.localeCompare(b.FulltNavn));
  } else {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .filter(x => x.FulltNavn.toLowerCase().includes(input))
      .sort((a, b) => b.FulltNavn.localeCompare(a.FulltNavn));
  }

  // when choose(click) the county name, chaging the filter condition(so triger the resultArr, render the list)
  const handleChange = (value: string) => {
    dispatch(setSelect(value));
  };

  // pagination 40 data per page
  const pages = resultArr.length / 40;

  const markFavo = (id: string) => {
    const newData = mergeData.map(x => {
      if (x.OrgNr === id) return { ...x, isFavorite: !x.isFavorite };
      return x;
    });
    dispatch(setMergeData(newData));

    console.log(
      `from merge data`,
      newData.filter(x => x.OrgNr === id)
    );
  };

  return (
    <StyledMainContent>
      <div className="left">
        {getCounty.map(option => (
          <Left
            key={option}
            value={option}
            select={option}
            handleChange={handleChange}
          />
        ))}
      </div>

      <div className="right">
        {resultArr.slice(40 * page, 40 * (page + 1)).map(list => (
          <List
            key={list.OrgNr}
            id={list.OrgNr}
            favorite={list.isFavorite}
            markFavo={markFavo}
            countyName={list.Navn}
            fullname={list.FulltNavn}
            email={list.Epost.length === 0 ? 'N/A' : list.Epost}
            character={
              list.Karakteristikk.length === 0 ? 'N/A' : list.Karakteristikk
            }
            type={list.ErOffentligSkole ? 'Public' : 'Private'}
            basic={list.ErGrunnSkole ? 'True' : 'False'}
          />
        ))}
      </div>

      <div className="pagination">
        {page < pages && page !== 0 && (
          <div onClick={() => dispatch(setPage(page - 1))}>prev</div>
        )}
        {resultArr.length !== 0 && <div className="show-page">{page + 1}</div>}
        {pages > page + 1 && (
          <div onClick={() => dispatch(setPage(page + 1))}>next</div>
        )}
      </div>

      {mergeData
        .filter(x => x.isFavorite === true)
        .map(x => (
          <Favorite
            key={x.OrgNr}
            id={x.OrgNr}
            favorite={x.isFavorite}
            markFavo={markFavo}
          />
        ))}
    </StyledMainContent>
  );
};

const StyledMainContent = styled.div`
  width: 1500px;
  margin: 50px auto;
  display: flex;

  .left {
    width: 18%;
    display: flex;
    flex-direction: column;
  }

  .right {
    width: 82%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .pagination {
    display: flex;
    font-size: 24px;
    font-weight: 300;
    position: fixed;
    bottom: 150px;
    right: 10px;
    div {
      margin: 6px;
      padding: 0 10px;
      color: white;
      border: 2px solid ${props => props.theme.colors.green};
      background-color: ${props => props.theme.colors.green};
      border-radius: 5px;
      box-shadow: 0 1px 2px 2px rgba(50, 50, 50, 0.2);
    }

    .show-page {
      font-weight: 500;
      color: ${props => props.theme.colors.black};
      background-color: ${props => props.theme.colors.backgroundGray};
      border: 1px solid ${props => props.theme.colors.borderGray};
    }
  }
`;

export default MainContent;
