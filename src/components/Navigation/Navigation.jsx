import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import HomeIcon from '@mui/icons-material/Home';
import { Nav } from './Navigation.styled';
import { Link } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Link to="/" underline="none" component={NavLink} color={'white'}>
        {<HomeIcon />}
      </Link>
      {isLoggedIn && (
        <Link
          to="/contacts"
          underline="none"
          component={NavLink}
          color={'white'}
        >
          Contacts
        </Link>
      )}
    </Nav>
  );
};
