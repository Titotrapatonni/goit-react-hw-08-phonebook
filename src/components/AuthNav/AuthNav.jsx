import { Link } from '@mui/material';
import { Thumb } from 'components/UserMenu/UserMenu.styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Thumb>
      <Link to="/register" underline="none" component={NavLink} color={'white'}>
        Register
      </Link>
      <Link to="/login" underline="none" component={NavLink} color={'white'}>
        Log In
      </Link>
    </Thumb>
  );
};
