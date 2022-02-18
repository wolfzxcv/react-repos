import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCookie, setCookie } from '../../utils';
import List, { IBmi } from './List';

const BmiCalculator: React.FC<{}> = () => {
  const defaultInput = { name: '', height: '', weight: '' };
  const [input, setInput] = useState<{
    name: string;
    height: string;
    weight: string;
  }>(defaultInput);
  const [display, setDisplay] = useState<IBmi[]>([]);

  useEffect(() => {
    const data = getCookie('bmi');

    if (data) {
      setDisplay(JSON.parse(data));
    }
  }, []);

  const storeInCookie = (dataSaveInCookie: IBmi[]) => {
    setCookie('bmi', JSON.stringify(dataSaveInCookie), 30);
    setDisplay(dataSaveInCookie);
  };

  const calculate = async () => {
    const height = Number(input.height);
    const weight = Number(input.weight);
    const validInput =
      height &&
      weight &&
      height < 250 &&
      height > 90 &&
      weight < 300 &&
      weight > 10 &&
      input.name.trim().length > 0;
    if (validInput) {
      setInput(input);
      const calHeight = Number(input.height) / 100;
      const bmi = (weight / calHeight / calHeight).toFixed(2);
      getResult(input.name, input.height, input.weight, Number(bmi));
      await setInput(defaultInput);
    } else {
      alert('please enter valid name and correct number for height/weight');
    }
  };

  const getResult = (
    name: string,
    height: string,
    weight: string,
    bmi: number
  ) => {
    const options = {
      color: '',
      status: ''
    };

    if (bmi < 18.5) {
      options.color = 'green';
      options.status = 'Undervektig';
    } else if (bmi >= 18.5 && bmi < 25) {
      options.color = 'blue';
      options.status = 'Normal kroppsvekt';
    } else if (bmi >= 25 && bmi < 30) {
      options.color = 'orange';
      options.status = 'Overvektig';
    } else {
      options.color = 'red';
      options.status = 'Fedme';
    }
    return allData(options.color, name, height, weight, bmi, options.status);
  };

  const allData = (
    color: string,
    name: string,
    height: string,
    weight: string,
    bmi: number,
    status: string
  ) => {
    const date = new Date().toLocaleDateString();
    const newResult: IBmi = {
      id: nanoid(),
      color,
      name,
      height,
      weight,
      bmi,
      date,
      status
    };
    const dataSaveInCookie = [...display, newResult];
    storeInCookie(dataSaveInCookie);
  };

  const removeData = (id: string) => {
    const dataSaveInCookie = display.filter(data => data.id !== id);
    storeInCookie(dataSaveInCookie);
  };

  return (
    <StyledBmiCalculator>
      <header>
        <div className="logo">BMI</div>

        <div>
          <p>Your name</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={input.name}
            onChange={e => setInput({ ...input, name: e.target.value })}
          />
          <p>Your height / cm</p>
          <input
            type="text"
            placeholder="Enter your height"
            value={input.height}
            onChange={e => setInput({ ...input, height: e.target.value })}
          />
          <p>Your weight / kg</p>
          <input
            type="text"
            placeholder="Enter your weight"
            value={input.weight}
            onChange={e => setInput({ ...input, weight: e.target.value })}
          />
        </div>

        <div className="circle-result" onClick={calculate}>
          Get your result
        </div>
      </header>

      <div className="bmi-title">BMI result</div>

      <div>
        {display.map(i => (
          <List
            key={i.id}
            id={i.id}
            color={i.color}
            name={i.name}
            height={i.height}
            weight={i.weight}
            bmi={i.bmi}
            date={i.date}
            status={i.status}
            removeData={removeData}
          />
        ))}
      </div>

      <footer>
        <div className="footer-logo">BMI</div>
      </footer>
    </StyledBmiCalculator>
  );
};

const orange = '#FFD366';
const gray = '#424242';

const StyledBmiCalculator = styled.div`
  background: #fffacd;
  display: flex;
  flex-direction: column;
  font-family: cursive;
  @media (min-width: 769px) {
    header {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      width: 100vw;
      height: 350px;
      background-color: ${gray};
    }
    .logo {
      font-size: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${gray};
      background-color: ${orange};
      width: 120px;
      height: 120px;
      border-radius: 20%;
      border: 1px solid ${orange};
      box-shadow: 0 1px 2px 2px blue;
    }
    .circle-result {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    header {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      width: 100vw;
      height: 500px;
      background-color: ${gray};
    }
    .logo {
      display: none;
    }
    .circle-result {
      width: 250px;
      height: 50px;
      border-radius: 20px;
    }
  }
  p {
    font-size: 18px;
    color: ${orange};
  }
  input {
    width: 250px;
    height: 40px;
    &[type='text'] {
      width: 100%;
      border: 2px solid ${orange};
      background: rgba(255, 255, 255, 0.18);
      color: #fff;
      outline: 0;
      font-size: 24px;
      padding: 2px 12px;
      border-radius: 10px;
    }
  }
  .circle-result {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${gray};
    background-color: ${orange};
    border: 1px solid ${orange};
    &:hover,
    &:active {
      box-shadow: 0 1px 6px 3px rgba(255, 196, 50, 0.64);
      background: rgba(222, 168, 33, 1);
    }
  }
  .bmi-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 24px;
    color: ${gray};
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 90px;
    background-color: ${orange};
    margin-top: 50px;
    .footer-logo {
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${gray};
      background-color: ${orange};
      width: 55px;
      height: 55px;
      border-radius: 20%;
      border: 1px solid ${orange};
      box-shadow: 0 1px 2px 2px #c71585;
    }
  }
`;

export default BmiCalculator;
