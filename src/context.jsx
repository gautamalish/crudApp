import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const Context = createContext();
export function useAuth() {
  return useContext(Context);
}
export function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    year: "",
  });
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [editId, setEditId] = useState(0);
  const values = {
    formData,
    setFormData,
    list,
    setList,
    editId,
    setEditId,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
}
