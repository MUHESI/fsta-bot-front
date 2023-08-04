import React from "react";
import Laayout from "./pages/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  console.clear();
  console.log("test");

  return (
    <>
      <Laayout />
      <ToastContainer />
    </>
  );
}

export default App;
