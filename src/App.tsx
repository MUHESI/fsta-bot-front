import React from "react";
import Layout from "./components/navigation/Layout";
import { ToastContainer } from "react-toastify";
import RangerSlider from "@/components/core/RangerSlider";

function App() {
  return (
    <div>
      <ToastContainer />
      <Layout />
    </div>
  );
}

export default App;
