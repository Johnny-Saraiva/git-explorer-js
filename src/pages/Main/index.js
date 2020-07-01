import React from 'react';

import { FaPlus, FaGithub } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub />
        Repositories
      </h1>

      <Form>
        <input type="text" placeholder="Add repositories" />

        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
