import React from 'react';
import styled from 'styled-components';

const PillContainer = styled.div<{ colour: string }>`
  background: ${props => props.colour};
  border: 2px solid #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  height: 27px;
  width: 90px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Secular One;
`;

interface IPillProps {
  colour: string;
  label: string;
}

const Pill = ({ label, colour }: IPillProps) => (
  <PillContainer colour={colour}>{label}</PillContainer>
);

export default Pill;
