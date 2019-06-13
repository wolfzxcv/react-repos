import React, {useState} from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'

const colorOrange = '#424242'
const colorGray = '#FFD366'

const App = ({className}) => {
  const [input, setInput] = useState({height:'',weight:''})
//  const [display, setDisplay] = useState([])
 
  const calcu = () => {
   if( input.height<250 && input.height>90 && input.weight<300 && input.weight>10 ){
    setInput(input)
    const bmi = (input.weight/input.height*100/input.height*100).toFixed(2)
    const date = new Date().toLocaleDateString()  
    getResult(input.height, input.weight, bmi, date)  
  }
    else{
    alert('please enter correct number')}   
  }
 
  const getResult = (height, weight, bmi, date) => {
  let options = {
    color: '', 
    status: ''  
  };

  if(bmi< 18.5) { 
    options.color= 'green';
    options.status= 'Undervektig';    
  }else if(bmi>=18.5 && bmi<25){  
    options.color = 'blue';
    options.status= 'Normal kroppsvekt';
  }else if(bmi>=25 && bmi<30){  
    options.color = 'orange'; 
    options.status = 'Overvektig';  
  }else{ 
    options.color = 'red'; 
    options.status = 'Fedme';  
  }   
    return alert(`height:${height} weight:${weight} bmi:${bmi} date:${date} color: ${options.color} status: ${options.status}`)     
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
  background-color: ${colorOrange};
}  

.logo{
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorOrange};
  background-color: ${colorGray};
  width: 120px;
  height: 120px;
  border-radius: 20%;
  border: 1px solid ${colorGray};
  box-shadow:0 1px 2px 2px blue;
}

p{
  font-size: 18px;
  color: ${colorGray}; 
}

input {
 width: 250px;
 height: 40px;
 &[type=text]{
  width:100%;
  border:2px solid ${colorGray};
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
  color: ${colorOrange};
  background-color: ${colorGray};
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid ${colorGray};
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
  color: ${colorOrange};
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
  background-color: ${colorGray};

  .footer-logo{
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorOrange};
  background-color: ${colorGray};
  width: 55px;
  height: 55px;
  border-radius: 20%;
  border: 1px solid ${colorGray};
  box-shadow:0 1px 2px 2px red;
  }
}
`
StyledApp.displayName = 'App'

export default StyledApp
 