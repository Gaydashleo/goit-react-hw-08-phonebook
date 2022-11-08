import React from "react";
import { useDeleteContactMutation } from '../../redux/contacts/contactsSliceApi';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export const ContactItem = ({name, number, id}) => {
    
    const [deleteContact, result] = useDeleteContactMutation();
    
    return (
        <>
            <p>{name} : {number} </p>
            <Button variant="contained" startIcon={<DeleteIcon />} color="primary" size="small"
                type="button"
                onClick={() => deleteContact(id)}
                contactId={id}
                disabled={result.isLoading}
            >
                Delete
            </Button>
            
        </>
    )
}