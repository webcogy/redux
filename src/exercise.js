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
// 스토어 생성
const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

// 구독을 해줘야 store를 사용할 수 있게 된다.
const unsubscribe = store.subscribe(listener);

// dispatch할 때 마다 store가 호출됨
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id:1, text:'ㅎㅎㅎ'}));

// window객체로 사용할 수 있게 설정, console에서 dispatch등등 사용해볼 수 있게 됨
window.store = store;
window.unsubscribe = unsubscribe ; // unsubscribe(); 사용시 store 구독취소됨