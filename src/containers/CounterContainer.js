import React from 'react';
import Counter from '../components/Counter'
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter'

// 프레젠테이션 컴포넌트 => 주로 UI 선언에 집중
function CounterContainer(){
    //useSelector => redux의 현재상태를 불러온다.
    const { number, diff } = useSelector(state => ({ //state.getState()가 여기로 온다
        number:state.counter.number,
        diff:state.counter.diff
    }));


    // useDispatch => dispatch 사용가능
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;