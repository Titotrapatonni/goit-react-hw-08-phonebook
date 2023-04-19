import { Button } from 'components/ContactForm/ContactForm.styled';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
    <>
      <Formik
        initialValues={initaialValues}
        onSubmit={(newUser, actions) => {
          handleSubmit(newUser);
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </>
  );
};
