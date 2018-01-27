import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as mapActions from '../../actions/map-actions';
import PropTypes from 'prop-types';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import './index.css'

const params = { v: '3.exp', key: 'AIzaSyC-El8blNi03t3oj2ly8HhrHGKwxVPg4U8' };

class Map extends React.Component {
  constructor(){
    super();
    this.onMapCreated = this.onMapCreated.bind(this);
    this.moveMarker = this.moveMarker.bind(this);
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  moveMarker(e) {
    this.props.moveMarker(e.latLng.lng(), e.latLng.lat())
  }
  render() {
    const coords = {
      lat: 31.50170 ,
      lng: 34.46684
    };
    const { marker } = this.props;
    return (
      <div className='map'>
        <Gmaps
          onClick={this.moveMarker}
          width={'100%'}
          height={'100%'}
          lat={coords.lat}
          lng={coords.lng}
          zoomControlOptions={'BOTTOM_RIGHT'}
          zoomControl={'true'}
          zoom={12}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={marker.lat}
            lng={marker.lng}
            draggable={true}
           />
        </Gmaps>
      </div>
    );
  }

};
Map.propTypes = {
  marker: PropTypes.object
};

const mapStateToProps = state => {
  return {
    marker: state.map.marker,
    error: state.map.error
  };
};
export default connect(mapStateToProps, mapActions)(Map);
