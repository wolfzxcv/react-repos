import React from 'react';
import styled from 'styled-components';

export type IBmi = {
  name: string;
  height: string;
  weight: string;
  bmi: number;
  date: string;
  status: string;
  id: string;
  color: string;
};

type ListProps = IBmi & {
  removeData: (id: string) => void;
};

const List: React.FC<ListProps> = ({
  name,
  height,
  weight,
  bmi,
  date,
  status,
  id,
  color,
  removeData
}: ListProps) => (
  <StyledList id={id} color={color}>
    <div>Name: {name}</div>
    <div>
      {height}/{weight}
    </div>
    <div>BMI: {bmi}</div>
    <div>Date: {date}</div>
    <div>{status}</div>
    <div className="delete" onClick={() => removeData(id)}>
      delete
    </div>
  </StyledList>
);

const StyledList = styled.div<{ color: string }>`
 display: flex;
 margin: 30px auto;
 font-size: 22px; 
 box-shadow:0 1px 2px 3px ${props => props.color};
 color: ${props => props.theme.colors.gray};
 @media (min-width: 769px){
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 100px;
 }
 @media (max-width: 768px){
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 200px;
  border-radius: 20px;
 }
.delete{
  color: ${props => props.theme.colors.darkRed};
  font-weight: 600;
} 
} 
`;
StyledList.displayName = 'List';

export default List;
