import React, { Suspense } from "react";
import Laayout from "./pages/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Laayout />
      <ToastContainer />
    </>
  );
}

export default App;
