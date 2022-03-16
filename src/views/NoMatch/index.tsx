import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.FC<{}> = () => (
  <div>
    <h2>It looks like you&apos;re lost...</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);

export default NoMatch;
