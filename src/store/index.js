import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from './DevTools'; //new

const store = createStore(reducers, DevTools.instrument());

export default store;