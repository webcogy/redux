// console.log('Hello!')

import { createStore } from 'redux';

const initialState = {
    counter:0,
    text:'',
    list:[]
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


const increase = () => ({
    type:INCREASE,
});

const decrease = () => ({
    type:DECREASE,
});

const changeText = text => ({
    type:CHANGE_TEXT
});

const addToList = item => ({
    type:ADD_TO_LIST,
    item
});

function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter:state.counter + 1
            };
        case DECREASE:
            return{
                ...state,
                counter:state.counter - 1
            };
        case CHANGE_TEXT:
            return{
                ...state,
                counter:action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list:state.list.concat(action.item)
            };
        default:
            return state; // 기본 값 설정. 파라미터가 undefiend인 경우를 대비
    }
}

const store = createStore(reducer);
console.log(store.getState());