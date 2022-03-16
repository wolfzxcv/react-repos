import { RouteObject, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout, {
  Course,
  Courses,
  CoursesIndex
} from './components/Base/Layout';
import theme from './styles/theme';
import BmiCalculator from './views/BmiCalculator';
import DrumMachine from './views/DrumMachine';
import Home from './views/Home';
import NoMatch from './views/NoMatch';
import NorwegianSchools from './views/NorwegianSchools';

const App = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/drumMachine',
          element: <DrumMachine />
        },
        {
          path: '/bmiCalculator',
          element: <BmiCalculator />
        },
        {
          path: '/NorwegianSchools',
          element: <NorwegianSchools />
        },
        {
          path: '/courses',
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: '/courses/:id', element: <Course /> }
          ]
        },
        { path: '*', element: <NoMatch /> }
      ]
    }
  ];
  const element = useRoutes(routes);

  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default App;
