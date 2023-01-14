import { useState } from 'react'
import { useGetTodoQuery } from './store/apis'

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)
  const next = () => {
    setTodoId(todoId => todoId + 1)
  }
  const prev = () => {
    if (todoId === 1) return
    setTodoId(todoId => todoId - 1)
  }

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE' : 'PENDING'}: </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={prev}>
        Prev Todo
      </button>
      <button onClick={next}>
        Next Todo
      </button>
    </>
  )
}
