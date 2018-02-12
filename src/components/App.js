import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import PlayerForm from './PlayerForm';
import PlayerForm2 from './PlayerForm2';
import Winner from './Winner';
import * as actions from "../actions";
import { connect } from 'react-redux';
class App extends Component {
  render(){
    return(
      <div className="container">
        <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={Landing} />
        <Route exact path="/PlayerForm" component={PlayerForm} />
        <Route exact path="/PlayerForm2" component={PlayerForm2} />
        <Route exact path="/Winner" component={Winner} />
      </div>
      </BrowserRouter>
</div>
    )
  }
}
export default connect(null, actions)(App);
