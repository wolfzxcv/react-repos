import { Link, Outlet, useParams } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drumMachine">Drum Machine</Link>
        </li>
        <li>
          <Link to="/bmiCalculator">BMI Calculator</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>

    <hr />

    <Outlet />
  </div>
);

export const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export const Courses = () => (
  <div>
    <h2>Courses</h2>
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

export const NoMatch = () => (
  <div>
    <h2>It looks like you&apos;re lost...</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);

export default Layout;
