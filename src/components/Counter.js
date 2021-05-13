import React from 'react';

// 프레젠테이션 컴포넌트 => 주로 UI 선언에 집중
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }){
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    };

    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}
export default Counter;