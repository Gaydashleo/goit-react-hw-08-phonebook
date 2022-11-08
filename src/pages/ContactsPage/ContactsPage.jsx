import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useGetContactsQuery } from '../../redux/contacts/contactsSliceApi';

const ContactsPage = () => {
    const { data: contacts } = useGetContactsQuery();

    return (
        
        <>
            <ContactForm />
            <Filter/>
            {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Contact list is empty</p>
      )}
        
            
        </>
    )
}

export default ContactsPage;


