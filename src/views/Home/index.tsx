import React from 'react';
import styled from 'styled-components';

const Home: React.FC<{}> = () => (
  <StyledHome>
    <h2>React Repos</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Source</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Drum Machine</td>
          <td>
            <a
              href="https://codepen.io/nienyingchou/full/rgReZj"
              target="_blank"
              rel="noreferrer"
            >
              CodePen
            </a>
          </td>
          <td />
        </tr>

        <tr>
          <td>BMI calculator</td>
          <td>
            <a
              href="https://codepen.io/nienyingchou/full/YoXNZK"
              target="_blank"
              rel="noreferrer"
            >
              CodePen
            </a>
          </td>
          <td>
            <a href="https://vdogv.csb.app/" target="_blank" rel="noreferrer">
              CodeSandbox
            </a>
          </td>
        </tr>

        <tr>
          <td>Norwegian Schools</td>
          <td />
          <td>
            <a href="https://662b8.csb.app/" target="_blank" rel="noreferrer">
              CodeSandbox
            </a>
          </td>
        </tr>

        <tr>
          <td>Responsive NavBar and SideDrawer</td>
          <td />
          <td>
            <a href="https://g56t2.csb.app/" target="_blank" rel="noreferrer">
              CodeSandbox
            </a>
          </td>
        </tr>

        <tr>
          <td>Kaohsiung Travel Guide</td>
          <td />
          <td>
            <a href="https://ove31.csb.app/" target="_blank" rel="noreferrer">
              CodeSandbox
            </a>
          </td>
        </tr>

        <tr>
          <td>Todo list</td>
          <td>
            <a
              href="https://codepen.io/nienyingchou/full/VJZobX"
              target="_blank"
              rel="noreferrer"
            >
              CodePen
            </a>
          </td>
          <td>
            <a href="https://jum8z.csb.app/" target="_blank" rel="noreferrer">
              CodeSandbox
            </a>
          </td>
        </tr>

        <tr>
          <td>Calendar with locales</td>
          <td>
            <a
              href="https://next-calendar-seven.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
          </td>
          <td>
            <a
              href="https://3kizfo.sse.codesandbox.io/"
              target="_blank"
              rel="noreferrer"
            >
              CodeSandbox
            </a>
          </td>
        </tr>

        <tr>
          <td>Pomodoro-Timer</td>
          <td>
            <a
              href="https://wolfzxcv.github.io/Pomodoro-Timer/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </td>
          <td>
            <a
              href="https://sgbr5b.csb.app/Pomodoro-Timer/"
              target="_blank"
              rel="noreferrer"
            >
              CodeSandbox
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </StyledHome>
);

const StyledHome = styled.div`
  min-height: 600px;
  background-color: ${props => props.theme.colors.borderGray};
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    margin: 50px 0;
    width: 100%;
    max-width: 760px;
    border-collapse: collapse;
    td,
    th {
      border: 1px solid ${props => props.theme.colors.white};
    }

    thead {
      th {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.darkRed};
      }
    }

    tbody {
      td {
        padding: 3px;
      }
      td:not(:nth-of-type(1)) {
        text-align: center;
      }
    }

    tbody {
      tr:nth-of-type(odd) {
        background: ${props => props.theme.colors.footerGray};
      }
      tr:nth-of-type(even) {
        background: ${props => props.theme.colors.white};
      }
    }
  }
`;

export default Home;
