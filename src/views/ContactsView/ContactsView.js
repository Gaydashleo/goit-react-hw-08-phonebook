import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
}