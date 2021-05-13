// root reducer.   counter 와 todos를 여기서 합친다
import { combineReducers, conbineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;
