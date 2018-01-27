import React from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker } from 'react-gmaps';
import './index.css'

const params = { v: '3.exp', key: 'AIzaSyC-El8blNi03t3oj2ly8HhrHGKwxVPg4U8' };

class TrackMap extends React.Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    const { coords } = this.props;
    return (
      <Gmaps
        className='trackMap'
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
          lat={coords.lat}
          lng={coords.lng}
          draggable={false}
         />
      </Gmaps>
    );
  }

};
export default TrackMap;
