import React from 'react'
import TodoForm from './components/TodoForm'
import { useSelector } from 'react-redux'
import TodoItem from './components/TodoItem'

const App = () => {
  const todos = useSelector(state => state.todos)
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {
            todos && todos.length > 0 ?
              todos.map(({ id, task, completed }) => (
                <div key={id} className='w-full'>
                  <TodoItem id={id} task={task} completed={completed} />
                </div>
              ))
              : null
          }
        </div>
      </div>
    </div>
  )
}

export default App
