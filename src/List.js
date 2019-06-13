import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const green = '#006400'
const orange = '#FDAD0D'
const blue = '#1E90FF'
const red = '#FF0000'

const List = ({className, color, name, height, weight, bmi, date, status, id, removeData}) => {
  return (
    <div className={className} id={id}>

    <div>Name: {name}</div>
    <div>{height}/{weight}</div> 
    <div>BMI: {bmi}</div> 
    <div>Date: {date}</div>
    <div>{status}</div>
    <div onClick={()=>removeData(id)}>delete</div>
 
    </div>
  )
}

List.propTypes = {
  className: PropTypes.string
}

const StyledList = styled(List)`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 width: 1200px;
 height: 100px;
 margin: 30px auto;
 box-shadow:0 1px 2px 2px ${props=>props.color};
 font-size: 22px; 
 color: #424242;
} 
`
StyledList.displayName = 'List'

export default StyledList