import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';

export default function Contact() {

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', maxWidth: '800px' }}>
        <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%' }}>
        <h2>Contact Me</h2>

        <MDBValidationItem invalid feedback='Please provide your name.'>
            <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide your email.'>
            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide mail subject.'>
            <MDBInput label='Subject' id="subject" v-model='subject' wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide a message text.'>
            <MDBTextArea wrapperClass='mb-4' id="body" label='Message' required />
        </MDBValidationItem>

        <MDBBtn type='submit' color='dark' block className='my-4'>
            Send
        </MDBBtn>
        </MDBValidation>
    </div>
  );
}