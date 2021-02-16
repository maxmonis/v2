import { Link } from 'react-router-dom';
import { Switch } from '../UI';

const Header = ({ dark, toggleDark }) => {
  return (
    <header>
      <Link to='/login' className='link'>
        Login
      </Link>
      <Link to='/register' className='link'>
        Register
      </Link>
      <Switch
        bool={dark}
        toggle={toggleDark}
        tooltipContent={`Set theme to ${dark ? 'light' : 'dark'}`}
      />
    </header>
  );
};

export default Header;
