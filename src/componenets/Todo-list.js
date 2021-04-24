import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        props.attribute.map(each => {
            console.log(each)
            return <Todo ToggleHandle={props.ToggleHandle} key={each.id} attributeOne={each} />
        })
    );
};

export default TodoList;