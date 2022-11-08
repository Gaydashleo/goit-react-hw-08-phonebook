import React, {useEffect} from "react";
import { useSelector } from 'react-redux';

import { ItemContact } from './ContactList.styled';
import { useGetContactsQuery } from '../../redux/contacts/contactsSliceApi';
import { ContactItem } from '../ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';

export const ContactList = () => {

  const { data: contacts, error, isLoading, refetch } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
 
  useEffect(() => {
    refetch();
  }, [refetch]);
    
  const filtredContacts = () => {
      if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    return (    
      <ul>
        {error && <p>{error.data}</p>}
        {isLoading ? (<Loader />) : ''}
        {contacts && 
        filtredContacts().map(({name, number, id}) => {
          return (
            <ItemContact key={id}>
              <ContactItem name={name} number={number} id={id} />
            </ItemContact>
            );
            })
        }
      </ul>
    );
}
