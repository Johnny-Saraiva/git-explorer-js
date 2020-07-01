import React, { Component } from 'react';
import { FaPlus, FaGithub, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = (event) => {
    this.setState({ newRepo: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithub />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add repositories"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
