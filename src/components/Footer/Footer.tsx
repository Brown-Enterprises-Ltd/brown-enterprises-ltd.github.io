import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-family: Secular One;
  display: flex;
  align-items: center;
  color: #fff;
  width: calc (100% - 60px);
  background: #272932;
  height: 124px;
  padding: 0px 30px;
  justify-content: space-between;
  font-size: 16px;
  line-height: 23px;
  text-align: right;
`;

const Footer = () => (
  <FooterContainer>
    <p>Built with ♥️in the United Kingdom</p>
    <div>
      <p>&copy; Brown Enterprises Ltd.</p>
      <p>All Rights Reserved.</p>
      <p>Registered in England and Wales: #12663707</p>
    </div>
  </FooterContainer>
);

export default Footer;
