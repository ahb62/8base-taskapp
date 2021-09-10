import { Link } from 'react-router-dom';

import { AuthButton } from './AuthButton';

const NavBar = () => (
  <div id="nav">
    {/* App title */}
    <h1>
      Testing the 8base with React! <span>❤️</span>
    </h1>
    <br />
    <Link to="/">Home</Link>
    <span> | </span>
    <Link to="/profile">Profile</Link>
    <span> | </span>
    <AuthButton />
  </div>
);

export { NavBar };
