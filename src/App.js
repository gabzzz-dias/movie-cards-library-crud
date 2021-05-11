import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

// Obtive uma ajuda fantástica do Luanderson no plantão, que me mostrou uma dica importante sobre a ordem certa do redirecionamento dos links, para que "/new" não entrasse como parâmetro em "/:id", e isso me ajudou a resolver alguns problemas no meu código.

export default App;
