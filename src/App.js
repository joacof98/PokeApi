import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Eggs from './Pages/Eggs';
import Types from './Pages/Types';
import SidebarMenu from './Components/SidebarMenu';

import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Container>
        <SidebarMenu />
        <Route exact path='/' component={Home} />
        <Route path='/types' component={Types} />
        <Route path='/eggs' component={Eggs} />
      </Container>
    </Router>
  );
}

export default App;
