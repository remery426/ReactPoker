import React from 'react';
import { Link } from 'react-router-dom';
const Landing = ()=>{
  return(
    <div>
      <p> Welcome to pokerhand ranker!  This app will allow you to input two poker hands and output the winner. No more fighting at game nights over the rules!</p>
      <div className="center-align">
      <Link  to="/PlayerForm" className="waves-effect waves-light btn red">Let's get started!</Link>
      </div>
    </div>
  )
}
export default Landing
