import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/selectors';
import { Thumb } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <Thumb>
      <p>
        Welcome <b>{userName}</b>
      </p>
      <Button
        variant="contained"
        // disableElevation
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        LogOut
      </Button>
    </Thumb>
  );
};
