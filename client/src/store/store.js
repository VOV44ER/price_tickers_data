import { createStore } from 'redux';
import reducer from './reducer';
import io from 'socket.io-client'
import { setStonks } from './actions';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const socket = io.connect('http://localhost:4000');
socket.emit('start');
socket.on('ticker', response => store.dispatch(setStonks(response)));

export default store;