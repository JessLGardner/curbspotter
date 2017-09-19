import React from 'react';
import { Link } from 'react-router-dom';


const GlobalFoot = () => {
  return (
    <footer className="page-footer grey darken-1">
      <div className="container foot-container">
        <div className="row">
          <div className="col l6 s12 foot-col-1">
            <p className="foot-logo">curbspottr</p>
            {/* <p>Their trash, your treasure.</p> */}
            <p>Find the perfect item in your fav neighborhood for the sweetest deal (free!) and save someone's stuff from the landfill.</p>
          </div>
          <div className="col l4 offset-l2 s12 foot-col-2">
            <p>THEIR TRASH, YOUR TREASURE.</p>
              <ul>
                <li><Link to="/neighborhoods" className="link-color">>>  home</Link></li>
                <li><Link to="/signup" className="link-color">>>  sign up</Link></li> 
                <li><Link to="/signin" className="link-color">>>  log in</Link></li>
              </ul>
          </div>
        </div>
        </div>
          <div className="footer-copyright">
            <small>© 2017 copyright Jess Gardner</small>
            <Link to="https://github.com/JessLGardner/curbspotter" className="grey-text text-lighten-4 right"><i className="code-icon material-icons md-18 right">code</i></Link>
          </div>
    </footer>
  );
};

export default GlobalFoot;