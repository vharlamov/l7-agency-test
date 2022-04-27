import TodoList from './components/todoList'

function App() {
	return (
		<div
			style={{
				maxWidth: '600px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				margin: 'auto',
			}}
		>
			<h1>Список задач</h1>
			<TodoList />
		</div>
	)
}

export default App
