import React from 'react'

const TodoForm = ({ handleSubmit, handleChange, value }) => {
	return (
		<form id='form' onSubmit={handleSubmit} className='form'>
			<div className='mb-3 '>
				<label htmlFor='textarea' className='form-label'>
					Новая задача:
				</label>
				<textarea
					type='text'
					id='textarea'
					className='form-control mb-3'
					onChange={handleChange}
					value={value}
				/>
				<button type='submit' className='btn btn-primary '>
					Создать
				</button>
			</div>
		</form>
	)
}

export default TodoForm
