import React from "react";
import Todos from "../Todos/Todos";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {

  return (
    <div className="p-5 text-black text-3xl">
      <Header></Header>
      <div className="bg-blue-100 p-4">
        <Todos></Todos>
      </div>
      <Footer></Footer>
    </div>
  )

}

export default Main;