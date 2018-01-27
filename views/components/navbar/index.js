import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Navbar extends Component {
  render() {
    const { home, title } = this.props;
    return (
      <div className='navbar'>
        {
          home ?
          <i className="fa fa-info navbar__info" aria-hidden="true"></i>:
          <Link to='/'><i className="fa fa-undo" aria-hidden="true"></i></Link>
        }
        <h1>{title}</h1>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Navbar;
