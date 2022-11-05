import {useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { motion, AnimatePresence } from 'framer-motion';
// import { List } from './ContactList.styled';   

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);

   return (
    <>
      {contacts.length > 0 && (
        <motion.ul >
          <AnimatePresence>
            {visibleContacts.map(({ id, name, number }) => (
              <motion.li
                
                key={id}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                
              >
                <p >
                  <b>{name}</b>
                  <em>{number}</em>
                </p>
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  type="button"
                  onClick={() => dispatch(contactsOperations.deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {!contacts.length && (
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            
          >
            Your phonebook is empty. Please add contact.
          </motion.p>
        </AnimatePresence>
      )}
    </>
  );
}


