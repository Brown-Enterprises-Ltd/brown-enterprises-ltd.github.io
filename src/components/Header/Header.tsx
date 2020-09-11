import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 60px;
  width: 100%;
  background: red;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Header</h1>
  </HeaderContainer>
);

export default Header;
