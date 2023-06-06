import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
        <h2>Contact Me</h2>

        <MDBValidationItem invalid feedback='Please provide your name.'>
            <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide your email.'>
            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide mail subject.'>
            <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide a message text.'>
            <MDBTextArea wrapperClass='mb-4' label='Message' required />
        </MDBValidationItem>

        <MDBValidationItem feedback=''>
            <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
        </MDBValidationItem>

        <MDBBtn type='submit' color='dark' block className='my-4'>
            Send
        </MDBBtn>
        </MDBValidation>
    </div>
  );
}