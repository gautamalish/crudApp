import { useState } from "react";
import "./App.css";
import Table from "./read/Table";
import Create from "./create/Create";
import { useAuth } from "./context";
function App() {
  const { list } = useAuth();
  return (
    <div className="mainContainer">
      <Create />
      <Table />
    </div>
  );
}

export default App;
