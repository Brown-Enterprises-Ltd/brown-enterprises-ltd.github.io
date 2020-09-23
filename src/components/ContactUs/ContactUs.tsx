import React from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import 'whatwg-fetch';

const ContactUsContainer = styled.div`
  width: 100%;
  background: #064469;
  padding: 40px 0px;
`;

const InnerContainer = styled.div``;

const StyledSubmit = styled.button``;

const EnquiryForm = () => (
  <Formik
    initialValues={{
      name: '',
      emailAddress: '',
      message: '',
    }}
    onSubmit={async (values, { resetForm }) => {
      const formData = new FormData();
      formData.set('name', values.name);
      formData.set('emailAddress', values.emailAddress);
      formData.set('message', values.message);

      const response = await fetch('https://formspree.io/mbjpjqba', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.status === 200) {
        resetForm();
        alert("Thanks, we'll be in touch within 24 hours");
      } else {
        alert('Network error, please try again or call +447711815264');
      }
    }}
  >
    <Form>
      <Field type="text" name="name" />
      <Field type="text" name="emailAddress" />
      <Field component="textarea" name="message" />
      <StyledSubmit>Send Message</StyledSubmit>
    </Form>
  </Formik>
);

const ContactUs = () => (
  <ContactUsContainer>
    <InnerContainer>
      <EnquiryForm />
    </InnerContainer>
  </ContactUsContainer>
);

export default ContactUs;
