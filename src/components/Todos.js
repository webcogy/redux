import React, { useState } from 'react';
/**
 * 07 할일목록 구현
 * @returns Todos
 */


// 하나의 todo
const TodoItem = React.memo(function TodoItem({ todo, onToggle }){
    return (
        <li
            style={{
                textDecoration:todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)} // todo param => modules/todos->initialState 객체
        >
            {todo.text}
        </li>
    )
})

// 여러개의 todo
const TodoList = React.memo(function TodoList({ todos, onToggle }){
    return(
        <ul>
            {
                todos.map(todo => 
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                    />    
                )
            }
        </ul>
    )
});

function Todos({ todos, onCreate, onToggle }){
    // 꼭 모든 상태를 리덕스에서 관리해야하는 건 아니다. useState를 써도 됨
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={text} 
                    onChange={onChange} 
                    placeholder='할 일을 입력하세요...' 
                />
                <button type="submit">등록</button>
            </form>
            <TodoList
                todos={todos}
                onToggle={onToggle}            
            />
        </div>
    )
}

export default React.memo(Todos);