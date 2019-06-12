import React, {useState} from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'

const App = ({className}) => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  return (
    <div className={className}>
    <div><img src='./BMICLogo.png' alt='BMICLogo' /></div>  

    <div>
    <p>Your height / cm</p>  
    <input type='text' placeholder='Enter your height' value={height} onChange={e=>setHeight(e.target.value)} />
    <p>Your weight / kg</p>
    <input type='text' placeholder='Enter your weight' value={weight} onChange={e=>setWeight(e.target.value)} />
    </div>

    <div>Get the result</div>
    
    </div>
  )
}

App.propTypes = {
  className: PropTypes.string
}

const StyledApp = styled(App)`
  display: flex;
  justify-content:space-around;
  align-items: center;
  text-align: center;
`

StyledApp.displayName = 'App'

export default StyledApp
 