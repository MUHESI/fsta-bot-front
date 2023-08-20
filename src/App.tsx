import React from "react";
import Layout from "./components/navigation/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Layout />
      <ToastContainer />
    </div>
  );
}

export default App;
