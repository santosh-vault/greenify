import React from "react";
import Layout from "./Layout";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Layout />
      <ProtectedRoute path="/protected" component={ProtectedRoute} />
    </>
  );
}

export default App;
