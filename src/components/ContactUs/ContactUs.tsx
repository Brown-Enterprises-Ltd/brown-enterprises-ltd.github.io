import React from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';

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
    onSubmit={values => alert(JSON.stringify(values))}
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
