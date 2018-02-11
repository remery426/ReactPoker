import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import PlayerForm from './PlayerForm'
class App extends Component {
  render(){
    return(
      <div className="container">
        <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/PlayerForm" component={PlayerForm} />
      </div>
      </BrowserRouter>
</div>  
    )
  }
}
export default App;
