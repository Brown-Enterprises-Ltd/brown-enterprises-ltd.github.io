import React from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import 'whatwg-fetch';
import { StyledSubtitle, StyledTitle } from 'components/Typography/Typography';

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

const StyledLabel = styled.label`
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  color: #fff;
`;

const StyledTextAreaField = styled(Field)`
  height: 240px;
  width: 540px;
  display: block;
`;

const TimeIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.5001 2.58325C8.37017 2.58325 2.5835 8.36992 2.5835 15.4999C2.5835 22.6299 8.37017 28.4165 15.5001 28.4165C22.6301 28.4165 28.4168 22.6299 28.4168 15.4999C28.4168 8.36992 22.6301 2.58325 15.5001 2.58325ZM20.9768 10.0232C19.4656 8.512 17.4893 7.74992 15.5001 7.74992V15.4999L10.0235 20.9765C13.046 23.999 17.9543 23.999 20.9897 20.9765C24.0122 17.954 24.0122 13.0457 20.9768 10.0232ZM5.16684 15.4999C5.16684 21.209 9.791 25.8332 15.5001 25.8332C21.2093 25.8332 25.8335 21.209 25.8335 15.4999C25.8335 9.79075 21.2093 5.16659 15.5001 5.16659C9.791 5.16659 5.16684 9.79075 5.16684 15.4999Z"
      fill="white"
    />
  </svg>
);

const EnquiryForm = () => (
  <>
    <StyledTitle colour="#FFF">Quotes and Enquiries</StyledTitle>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <TimeIcon />
      <StyledSubtitle colour="#FFF">All messages are responded to within 24 hours</StyledSubtitle>
    </div>
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
        <div>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <Field type="text" name="name" />

          <StyledLabel htmlFor="emailAddress">Email Address</StyledLabel>
          <Field type="text" name="emailAddress" />
        </div>
        <StyledLabel htmlFor="emailAddress">How can we help you?</StyledLabel>
        <StyledTextAreaField component="textarea" name="message" />
        <StyledSubmit>Send Message</StyledSubmit>
      </StyledForm>
    </Formik>
  </>
);

const ContactUs = () => (
  <ContactUsContainer>
    <InnerContainer>
      <EnquiryForm />
    </InnerContainer>
  </ContactUsContainer>
);

export default ContactUs;
