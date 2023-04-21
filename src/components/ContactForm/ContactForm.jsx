import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import { TextField } from 'formik-mui';
import { Box, Button } from '@mui/material';
import { NewContactForm } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(addContacts(newContact));
  };

  const checkExistingContact = newContact => {
    const checked = contacts.filter(contact => {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (checked.length !== 0) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      addNewContact(newContact);
    }
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    checkExistingContact({ name, number });
    resetForm();
  };
  return (
    <Box
      sx={{
        maxWidth: 600,
      }}
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <NewContactForm autoComplete="off">
          <Field
            component={TextField}
            type="text"
            name="name"
            label="Name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />

          <Field
            component={TextField}
            type="tel"
            name="number"
            label="Phone"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />

          <Button type="submit" variant="contained">
            Add contact
          </Button>
        </NewContactForm>
      </Formik>
    </Box>
  );
};
