import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: var(--dark-color);
  margin-bottom: 2rem;
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <p>Get in touch with our team.</p>
    </ContactContainer>
  );
};

export default Contact;
