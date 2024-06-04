import React from "react";
const ExternalTodos = React.lazy(() => import('components/ExternalTodos'));

const Todos = () => {
  return (
    <div className="w-full p-5 container">
      <main className="flex flex-col h-screen">
        <ExternalTodos></ExternalTodos>
      </main>
    </div>
  )
}

export default Todos;