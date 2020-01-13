
import {jokeReducer} from './jokes/jokesReducer';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(jokeReducer,applyMiddleware(thunk));

export default store;