import React, { useState } from 'react'
import TodoForm from './todoForm'
import { nanoid } from 'nanoid'
import TodoItem from './todoItem'

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [todoText, setTodoText] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setTodos((prev) => [...prev, { id: nanoid(), value: todoText }])
		setTodoText('')
	}

	const handleChange = (e) => {
		const text = e.target.value
		setTodoText(text)
	}

	const handleDelete = (id) => {
		setTodos((prev) => prev.filter((el) => el.id !== id))
	}

	return (
		<>
			<TodoForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				value={todoText}
			/>
			{todos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} handleClick={handleDelete} />
			))}
		</>
	)
}

export default TodoList
