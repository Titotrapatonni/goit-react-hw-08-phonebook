import { Button } from 'components/ContactForm/ContactForm.styled';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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
    <Formik
      initialValues={initialValues}
      onSubmit={(user, action) => {
        handleSubmit(user);
        action.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};
