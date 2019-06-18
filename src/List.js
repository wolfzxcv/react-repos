import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const List = ({className, name, height, weight, bmi, date, status, id, removeData}) => {
  return (
    <div className={className} id={id}>

    <div>Name: {name}</div>
    <div>{height}/{weight}</div> 
    <div>BMI: {bmi}</div> 
    <div>Date: {date}</div>
    <div>{status}</div>
    <div className='delete' onClick={()=>removeData(id)}>delete</div>
 
    </div>
  )
}

List.propTypes = {
  className: PropTypes.string
}

const StyledList = styled(List)`
 display: flex;
 margin: 30px auto;
 box-shadow:0 1px 2px 3px ${props=>props.color};
 font-size: 22px; 
 color: #424242;

 @media (min-width: 769px){
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
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
  color: #8B0000;
  font-weight: 600;
} 
} 
`
StyledList.displayName = 'List'

export default StyledList