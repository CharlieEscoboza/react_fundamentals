/**
 * Created by Charlie on 10/30/2016.
 */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components
import Home from '../components/Home';
import Main from '../components/Main';
import PromptContainer from '../containers/PromptContainer';
import ConfirmationBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/playerOne" header="Player One" component={PromptContainer}/>
      <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer}/>
      <Route path="/battle" component={ConfirmationBattleContainer}/>
      <Route path="/results" component={ResultsContainer}/>
    </Route>
  </Router>
);
