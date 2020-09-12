import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const SplitJumbotronContainer = styled.div`
  display: flex;
`;

const JumbotronTileContainer = styled(Link)<{colour: string}>`
  background: ${props => props.colour};
  width: 33.333333333%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

interface IJumbotronTileProps {
  colour: string;
  Icon: () => JSX.Element;
  title: string;
  subtitle: string;
}

const StyledTitle = styled.h2<{colour: string}>`
  margin-top: 10px;
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 44px;
  color: ${props => props.colour};
`;

const StyledSubtitle = styled.span<{colour: string}>`
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  color: ${props => props.colour};
`;

const JumbotronTile = ({ colour, Icon, title, subtitle }: IJumbotronTileProps) => (
  <JumbotronTileContainer colour={colour} to="/">
    <Icon/>
    <StyledTitle colour={colour === '#FFFFFF' ? '#272932': '#FFFFFF'}>{title}</StyledTitle>
    <StyledSubtitle colour={colour === '#FFFFFF' ? '#272932': '#FFFFFF'}>{subtitle}</StyledSubtitle>
  </JumbotronTileContainer>
)

const QuestionMarkIcon = () => (
  <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.583328 73.4999C0.583328 33.2499 33.25 0.583252 73.5 0.583252C113.75 0.583252 146.417 33.2499 146.417 73.4999C146.417 113.75 113.75 146.417 73.5 146.417C33.25 146.417 0.583328 113.75 0.583328 73.4999ZM80.7917 102.667V117.25H66.2083V102.667H80.7917ZM73.5 131.833C41.3437 131.833 15.1667 105.656 15.1667 73.4999C15.1667 41.3437 41.3437 15.1666 73.5 15.1666C105.656 15.1666 131.833 41.3437 131.833 73.4999C131.833 105.656 105.656 131.833 73.5 131.833ZM44.3333 58.9166C44.3333 42.802 57.3854 29.7499 73.5 29.7499C89.6146 29.7499 102.667 42.802 102.667 58.9166C102.667 68.2712 96.9061 73.3054 91.2972 78.207C85.9762 82.8571 80.7917 87.3878 80.7917 95.3749H66.2083C66.2083 82.0948 73.0779 76.8292 79.1178 72.1996C83.8559 68.5679 88.0833 65.3275 88.0833 58.9166C88.0833 50.8958 81.5208 44.3333 73.5 44.3333C65.4792 44.3333 58.9167 50.8958 58.9167 58.9166H44.3333Z" fill="white" fill-opacity="0.87"/>
  </svg>
);

const DeviceIcon = () => (
  <svg width="192" height="128" viewBox="0 0 192 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16H176V0H32C23.2 0 16 7.2 16 16V104H0V128H112V104H32V16ZM184 32H136C131.6 32 128 35.6 128 40V120C128 124.4 131.6 128 136 128H184C188.4 128 192 124.4 192 120V40C192 35.6 188.4 32 184 32ZM144 104H176V48H144V104Z" fill="black" fill-opacity="0.87"/>
  </svg> 
);

const PeopleIcon = () => (
  <svg width="180" height="126" viewBox="0 0 180 126" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M94.5 31.5C94.5 48.87 80.37 63 63 63C45.63 63 31.5 48.87 31.5 31.5C31.5 14.13 45.63 0 63 0C80.37 0 94.5 14.13 94.5 31.5ZM76.5 31.5C76.5 24.03 70.47 18 63 18C55.53 18 49.5 24.03 49.5 31.5C49.5 38.97 55.53 45 63 45C70.47 45 76.5 38.97 76.5 31.5ZM63 78.75C41.94 78.75 0 89.28 0 110.25V126H126V110.25C126 89.28 84.06 78.75 63 78.75ZM63 96.75C46.89 96.75 28.62 102.78 21.06 108H104.94C97.38 102.78 79.11 96.75 63 96.75ZM126.36 79.29C136.8 86.85 144 96.93 144 110.25V126H180V110.25C180 92.07 148.5 81.72 126.36 79.29ZM148.5 31.5C148.5 48.87 134.37 63 117 63C112.14 63 107.64 61.83 103.5 59.85C109.17 51.84 112.5 42.03 112.5 31.5C112.5 20.97 109.17 11.16 103.5 3.15C107.64 1.17 112.14 0 117 0C134.37 0 148.5 14.13 148.5 31.5Z" fill="white"/>
  </svg>
);

const SplitJumbotron = () => (
  <SplitJumbotronContainer>
    <JumbotronTile colour="#DD5F49" Icon={QuestionMarkIcon} title="Consulting CTO" subtitle="Expert tech leadership for your business" />
    <JumbotronTile colour="#FFFFFF" Icon={DeviceIcon} title="Development" subtitle="Software done properly" />
    <JumbotronTile colour="#DD5F49" Icon={PeopleIcon} title="Team Services" subtitle="Hire, Onboard, Retain and Train top tech talent" />
  </SplitJumbotronContainer>
);

export default SplitJumbotron;
