import React from 'react';
import styled from 'styled-components';
import { StyledSubtitle, StyledTitle } from '../Typography/Typography';
import Button from '../Button/Button';

const CTAJumbotronContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  padding: 40px 0px;
  background: #fff;
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

interface ICTAJumbotronProps {
  title: string;
  body: string;
  buttons: { label: string; href: string }[];
}

const CTAJumbotron = ({ title, body, buttons }: ICTAJumbotronProps) => (
  <CTAJumbotronContainer>
    <StyledTitle colour="#272932">{title}</StyledTitle>
    <StyledSubtitle colour="#272932">{body}</StyledSubtitle>
    <StyledButtonContainer>
      {buttons.map((button, index) => (
        <Button to={button.href} style={{ marginLeft: index % 2 ? '20px' : '0px' }}>
          {button.label}
        </Button>
      ))}
    </StyledButtonContainer>
  </CTAJumbotronContainer>
);

export default CTAJumbotron;
