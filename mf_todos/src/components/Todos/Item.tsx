import React from "react";
import { TodoProps } from "../../types";
import {HiXCircle} from "react-icons/hi" 


const Item = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div
    className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-300 " : "bg-green-200"}
      `}
  >
    <p
      className={`
          ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}
    >
      {task}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-3">
      <button
        aria-label="Delete a todo"
        className="h-8 w-8 flex justify-center items-center bg-red-800 hover:bg-red-700 text-white font-bold rounded-full"
        onClick={() => handleDeleteTodo(id)}
      >
        <HiXCircle color='red' />
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="form-checkbox h-6 w-6"
      />
    </div>
  </div>
)

export default Item;