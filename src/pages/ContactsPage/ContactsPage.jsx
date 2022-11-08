import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useGetContactsQuery } from '../../redux/contacts/contactsSliceApi';
import { Text} from './ContactsPage.styled';

const ContactsPage = () => {
    const { data: contacts } = useGetContactsQuery();

    return (
        
        <>
            <ContactForm />
            <Filter/>
            {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Text>Contact list is empty</Text>
      )}
        
            
        </>
    )
}

export default ContactsPage;