import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: var(--dark-color);
  margin-bottom: 2rem;
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <p>Discover the services we offer.</p>
    </ServicesContainer>
  );
};

export default Services;
