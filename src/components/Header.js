import React, {Component} from 'react';
class Header extends Component {
  render() {
    return (
      <nav>
        <div className ="nav-wrapper">
          <h1 className=" brand-logo">
            Poker Hand Ranker
          </h1>
        </div>
      </nav>
    )
  }
}
export default Header;
