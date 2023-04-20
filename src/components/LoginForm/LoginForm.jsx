import { Box, Button, Container } from '@mui/material';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField } from 'formik-mui';
import { LogForm } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = user => {
    dispatch(logIn(user));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Formik
        initialValues={initialValues}
        onSubmit={(user, action) => {
          handleSubmit(user);
          action.resetForm();
        }}
      >
        <LogForm autoComplete="off">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Field
              component={TextField}
              type="email"
              name="email"
              label="Email"
            />
            <Field
              component={TextField}
              type="password"
              name="password"
              label="Password"
            />
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </Box>
        </LogForm>
      </Formik>
    </Container>
  );
};
