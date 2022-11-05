import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

    const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
    };
  

    // const handleSubmit = e => {
    // e.preventDefault();

    //   const newContact = {
    //   id: nanoid(),
    //   name:name,
    //   phone:phone,
    // };

    //     data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    //   ? Report.warning(`${name}`,
    //     'This user is already in contacts.','OK')
    //       : addContact((newContact)) && reset();
    //       };
        
    //     // reset();
    //     //   };
    
    // const reset = () => {
    // setName ('');
    // setPhone ('');
    // };
  
  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = phone => {
    return contacts.find(contact => contact.phone === phone);
  };

  const checkEmptyQuery = (name, phone) => {
    return name.trim() === '' || phone.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`🤔 ${name} is already in the phonebook.`);
    } else if (checkRepeatNumber(phone)) {
      return toast(`🤔 ${phone} is already in the phonebook.`);
    } else if (checkEmptyQuery(name, phone)) {
      return toast.info("😱 Enter the contact's name and number phone!");
    } else {
      dispatch(contactsOperations.addContact(name, phone));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setPhone('');
  };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        {!isLoading && (
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
          >
            Add contact
          </Button>
        )}
        {isLoading && <p>Loading...</p>}
      </form>
    );
  }



