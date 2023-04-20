import { Box, Button, Container } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegForm } from './RegisterForm.styled';

const initaialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = newUser => {
    dispatch(register(newUser));
  };
  return (
    <Container component="main" maxWidth="xs">
      <Formik
        initialValues={initaialValues}
        onSubmit={(newUser, actions) => {
          handleSubmit(newUser);
          actions.resetForm();
        }}
      >
        <RegForm autoComplete="off">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Field type="text" name="name" component={TextField} label="Name" />
            <Field
              type="email"
              name="email"
              component={TextField}
              label="Email"
            />

            <Field
              type="password"
              name="password"
              component={TextField}
              label="Password"
            />
            <Button variant="contained" type="submit">
              Register
            </Button>
          </Box>
        </RegForm>
      </Formik>
    </Container>
  );
};
