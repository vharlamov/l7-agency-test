import React from 'react'

const TodoItem = ({ todo, handleClick }) => {
	return (
		<div className='card mb-3 p-3 d-flex flex-row justify-content-between'>
			<p>{todo.value}</p>
			<button className='btn btn-danger' onClick={() => handleClick(todo.id)}>
				Сделано!
			</button>
		</div>
	)
}

export default TodoItem
