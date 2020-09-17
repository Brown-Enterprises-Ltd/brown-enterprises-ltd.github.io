import styled from 'styled-components';

export const StyledTitle = styled.h2<{ colour: string }>`
  margin-top: 10px;
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 44px;
  color: ${props => props.colour};
`;

export const StyledSubtitle = styled.span<{ colour: string }>`
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  color: ${props => props.colour};
  text-align: center;
`;
