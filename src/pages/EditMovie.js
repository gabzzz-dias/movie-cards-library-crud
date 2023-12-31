import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.details = this.details.bind(this);
  }

  componentDidMount() {
    return this.details();
  }

  async handleSubmit(updatedMovie) {
    const status = await movieAPI.updateMovie(updatedMovie);
    if (status === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  async details() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
}.isRequired;

// Obtive ajuda dos meus colegas Letícia Galvão e Leandro Reis para entender algumas lógicas necessárias para alguns dos componentes desse projeto.
// link da PR dela src: https://github.com/tryber/sd-010-b-project-movie-card-library-crud/pull/55
// link da PR dele src: https://github.com/tryber/sd-010-b-project-movie-card-library-crud/pull/58

export default EditMovie;
