import { useEffect } from "react";
import { Formik, Form, Field } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from '@mui/material/Button';

import {useGetContactsQuery, useAddContactMutation } from '../../redux/contacts/contactsSliceApi';
import { LabelForm, SpanForm, Title } from './ContactForm.styled';
import { Loader } from "components/Loader/Loader";

export const ContactForm = () => {

    const [addContact, result] = useAddContactMutation();
    // console.log(result);
    const { data: contacts } = useGetContactsQuery();

    const handleSubmit = ({ name, number }, { resetForm }) => {
        // console.log({ name, number });
        contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? Notify.failure(
                `${name} is already in contacts.`,
            )
            : addContact({ name, number }) && resetForm();
        
        
    };

    useEffect((name) => {
            if (result.isSuccess) {
                Notify.success(`The ${name} has been added to your contact list.`);
                
            };
        }, [result.isSuccess]);
    
    return (
        <>
        {result.isLoading && <Loader/>}
        
        <Title>Contacts</Title>

        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
        >
            <Form >
                <LabelForm>
                    <SpanForm>Name</SpanForm> 
                    <Field
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </LabelForm>
                <LabelForm>
                    <SpanForm> Number</SpanForm>
                    <Field
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </LabelForm>
                    <Button variant="contained" color="primary" size="small" type="submit" disabled={result.isLoading} >Add Contact</Button>
            </Form>
            </Formik>
            
        </>
    );
};