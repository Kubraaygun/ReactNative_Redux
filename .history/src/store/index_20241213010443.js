import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
