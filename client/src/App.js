import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import SkillsList from './components/SkillsList';
import SkillModal from './components/SkillModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <SkillModal />
          <SkillsList />
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
