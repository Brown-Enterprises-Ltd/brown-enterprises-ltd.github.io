import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 110px;
  width: 100%;
  background: #272932;
  border-bottom: 4px #dd5f49 solid;
  align-items: center;
`;

const HeaderCTA = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2bd1d;
  width: 240px;
  font-family: Secular One;
  text-decoration: none;
  color: black;
  font-size: 20px;
  height: 100%;
`;

const HeaderButton = styled(Link)`
  display: flex;
  background: #dd5f49;
  height: 40px;
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  border-radius: 20px;
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
`;

const Logo = styled(Link)`
  color: #d8a47f;
  text-decoration: none;
  font-family: Secular One;
  font-size: 70px;
  margin-left: 30px;
  margin-right: 30px;
`;

const MainLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <HeaderContainer>
    <MainLinkContainer>
      <Logo to="/">B</Logo>
      <HeaderButton to="/professional-services">Professional Services</HeaderButton>
      <HeaderButton to="/showcase">Showcase</HeaderButton>
      <HeaderButton to="/clients">Clients</HeaderButton>
    </MainLinkContainer>
    <HeaderCTA to="/contact">Get in touch</HeaderCTA>
  </HeaderContainer>
);

export default Header;
