import React, { ChangeEvent, FormEvent, useState } from "react";
// import React from "react";

import { v4 as uuidv4 } from "uuid"

import { Todo } from "../../types";
import Item from "./Item";
import Add from "./Add";
import { data } from "../../data";

const Todos = () => {

  const [todos, setTodos] = useState<Todo[]>(data)
  const [task, setTask] = useState("")
  const todosLength = todos.length
  const hasTodos = todos.length > 0
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTask("")
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    }
    task && handleAddTodo(todo)
  }

  return (
     <section className="w-10/10 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <Add
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      <div className="h-12" />
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Just add a new todo
        </p>
      )}
      {hasTodos && (
        <p className="ml-2 text-xl font-sans font-medium">
          {remainingTodos} of {todosLength} to complete
        </p>
      )}
    </section>

  )

}

export default Todos;