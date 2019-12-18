/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Characters from './components/Characters';
import './assets/stylesheets/layout.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterIds: [],
      charactersById: {}
    };

    this.formatCharacters = this.formatCharacters.bind(this);
  }

  componentDidMount() {
    fetch('/api/star-wars')
      .then(res => res.json())
      .then(({ characters }) => {
        const { characterIds, charactersById } = this.formatCharacters(
          characters
        );
        return this.setState({
          characterIds,
          charactersById
        });
      })
      .catch(err => console.log('ERROR: ', err));
  }

  formatCharacters(characters) {
    const charactersById = JSON.parse(
      JSON.stringify(this.state.charactersById)
    );
    const characterIds = [...this.state.characterIds];
    characters.forEach(char => {
      const splitURL = char.url.split('/').filter(el => el);
      const id = splitURL[splitURL.length - 1];
      char.id = id;
      if (!charactersById[id]) {
        characterIds.push(id);
        charactersById[id] = char;
      }
    });
    return { characterIds, charactersById };
  }

  render() {
    const charProps = {
      characters: this.state.charactersById,
      characterIds: this.state.characterIds
    };
    return (
      <div className="router">
        <main>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Characters {...charProps} />}
              />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
