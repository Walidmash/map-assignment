import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mapActions from '../../actions/home-actions';
import PropTypes from 'prop-types';
import Map from '../map';
import Navbar from '../navbar';
import './index.css'

class Home extends Component {
  render() {
    const { isOpen } = this.props;

    return (
      <div className='home'>
        <Navbar home={true} title='New Request'/>
        <Map />
        <div className={isOpen?'home__services home__open':'home__services'}>
          <button
            onClick={this.props.toggleServices}
            className='home__selectServices'>
            Select Services</button>
          { isOpen?(
            <ul className='home__servicesList'>
              <Link to='/track'>
              <li>
                service1
              </li>
            </Link>
            <Link to='/track'>
              <li>
                service2
              </li>
            </Link>
            <Link to='/track'>
              <li>
                service3
              </li>
            </Link>
            </ul>
          ):<div></div>}
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  isOpen: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isOpen: state.home.isOpen
  };
};
export default connect(mapStateToProps, mapActions)(Home);
