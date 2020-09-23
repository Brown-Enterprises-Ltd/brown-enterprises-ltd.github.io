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

const StyledSubmit = styled.button`
  height: 75px;
  background: #f6d744;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  color: #000;
  text-decoration: none;
  border: 0px;
  font-size: 100%;
`;

const StyledForm = styled(Form)``;

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
    <StyledForm>
      <label htmlFor="name">Name</label>
      <Field type="text" name="name" />

      <label htmlFor="emailAddress">Email Address</label>
      <Field type="text" name="emailAddress" />

      <label htmlFor="emailAddress">How can we help you?</label>
      <Field component="textarea" name="message" />
      <StyledSubmit>Send Message</StyledSubmit>
    </StyledForm>
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
