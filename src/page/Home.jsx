// App.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function Home() {
  return (
    <Container>
      <Title>Welcome to My React Homepage</Title>
      <Description>
        This is a simple homepage created using React and styled-components.
      </Description>
      <Button>Get Started</Button>
    </Container>
  );
}

export default Home;
