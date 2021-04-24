import React from 'react';

const Todo = (props) => {
    const { name, complete, id } = props.attributeOne
    const handleClick = () => {
        props.ToggleHandle(id)
    }
    return (
        <>
            <label htmlFor="">
                <input type="checkbox" checked={complete} onChange={handleClick} />
                {name}
            </label>
        </>
    )
};

export default Todo;