import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: var(--dark-color);
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  color: var(--secondary-color);
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Benvenuto nel nostro sito</Title>
      <Subtitle>
        Questo è il contenuto della pagina principale. Naviga usando il menu in alto per esplorare
        il sito.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
