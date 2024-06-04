import React from 'react'
import { AddTodoProps } from '../../types'
import {HiPlusCircle} from "react-icons/hi" 

const Add = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="task"
      value={task}
      className="flex-2 rounded shadow p-2 text-grey-dark backg mr-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
      <HiPlusCircle color='green' />
    </button>
  </form>
)

export default Add