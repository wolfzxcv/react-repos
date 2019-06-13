import React, {useState} from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'

const App = ({className}) => {
  const [input, setInput] = useState({height:'',weight:''})
//  const [display, setDisplay] = useState([])
 
  const calcu = () => {
   if( input.height<250 && input.height>90 && input.weight<300 && input.weight>10 ){
    setInput(input)
    const bmi = (input.weight/input.height*100/input.height*100).toFixed(2)    
    runResult(input.height, input.weight, bmi)
  }
    else{
    alert('please enter correct number')}   
  }

  const runResult = (height, weight, bmi) =>{
    const date = new Date().toLocaleDateString()
    alert(`height:${height} weight:${weight} bmi:${bmi} date:${date}`)
  }

  return (
    <div className={className}>
    <header>  
    <div className='logo'>BMI</div>  

    <div>
    <p>Your height / cm</p>  
    <input type='text' placeholder='Enter your height' value={input.height} onChange={e=>setInput({...input, height: e.target.value})} />
    <p>Your weight / kg</p>
    <input type='text' placeholder='Enter your weight' value={input.weight} onChange={e=>setInput({...input, weight: e.target.value})} />
    </div>

    <div className='circle-result' onClick={calcu}>Get your result</div>
    </header>

    <div className='bmi-title'>
     BMI result
    </div>  

    <div className='content'>
    <div></div>  
    </div>  


    <footer><div className='footer-logo'>BMI</div></footer>
    </div>
  )
}

App.propTypes = {
  className: PropTypes.string
}
 
const StyledApp = styled(App)`
 
 display: flex;
 flex-direction: column;
 font-family: cursive;

header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 300px;
  background-color: #424242;
}  

.logo{
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #424242;
  background-color: #FFD366;
  width: 120px;
  height: 120px;
  border-radius: 20%;
  border: 1px solid #FFD366;
  box-shadow:0 1px 2px 2px blue;
}

p{
  font-size: 18px;
  color: #FFD366; 
}

input {
 width: 250px;
 height: 40px;
 &[type=text]{
  width:100%;
  border:2px solid #FFD366;
  background:rgba(255,255,255,0.18);
  color:#FFF;
  outline:0;
  font-size:24px;
  padding:2px 12px;
  border-radius:10px;
 }
}

.circle-result{  
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #424242;
  background-color: #FFD366;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #FFD366;
  &:hover, &:active{
  box-shadow:0 1px 6px 3px rgba(255,196,50,0.64);
  background:rgba(222,168,33,1);
  }
}  

.bmi-title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 24px;
  color: #424242;
}

.content{
  font-size: 24px;
}


footer{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 90px;
  background-color: #FFD366;

  .footer-logo{
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #424242;
  background-color: #FFD366;
  width: 55px;
  height: 55px;
  border-radius: 20%;
  border: 1px solid #FFD366;
  box-shadow:0 1px 2px 2px red;
  }
}

`

StyledApp.displayName = 'App'

export default StyledApp
 