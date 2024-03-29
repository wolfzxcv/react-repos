import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Nav/Nav';

const Layout = () => (
  <StyledLayout>
    <Nav />

    <Outlet />
  </StyledLayout>
);

const StyledLayout = styled.div`
  width: 100%;
`;

export const Courses = () => (
  <div>
    <h2>Courses</h2>
    <span>Example from React Router</span>
    <Outlet />
  </div>
);

export const CoursesIndex = () => (
  <div>
    <p>Please choose a course:</p>

    <nav>
      <ul>
        <li>
          <Link to="react-fundamentals">React Fundamentals</Link>
        </li>
        <li>
          <Link to="advanced-react">Advanced React</Link>
        </li>
        <li>
          <Link to="react-router">React Router</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export const Course = () => {
  const { id } = useParams<'id'>();

  return (
    <div>
      <h2>
        Welcome to the {id!.split('-').map(capitalizeString).join(' ')} course!
      </h2>

      <p>This is a great course. You&apos;re gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
};

function capitalizeString(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default Layout;
