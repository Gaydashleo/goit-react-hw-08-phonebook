import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

// import { Report } from 'notiflix/build/notiflix-report-aio';
import { toast } from 'react-toastify';
// import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';   

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
      <Form onSubmit={handleSubmit}>
        <Label >
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label >
          Number
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button
          variant="contained"
          type="submit"
        >  
        Add contact
        </Button>
        {isLoading && <p>Loading...</p>}
      </Form>
    );
  }



