import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: var(--dark-color);
  margin-bottom: 2rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <p>Learn more about our company and mission.</p>
    </AboutContainer>
  );
};

export default About;
