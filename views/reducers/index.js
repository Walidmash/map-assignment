import { combineReducers } from 'redux';
import map from './map-reducer';
import home from './home-reducer';

export default combineReducers({
  map,
  home
});
