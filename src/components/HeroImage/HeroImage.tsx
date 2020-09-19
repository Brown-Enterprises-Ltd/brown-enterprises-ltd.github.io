import styled from 'styled-components';

const HeroImage = styled.div<{ image: string }>`
  background: url(${props => props.image});
  height: 420px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default HeroImage;
