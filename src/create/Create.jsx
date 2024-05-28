import React, { useEffect } from "react";
import "./create.css";
import { useAuth } from "../context";
import { useState } from "react";
function Create() {
  const { formData, setFormData, list, setList, editId, setEditId } = useAuth();
  function handleChange(e) {
    setFormData((prevList) => {
      return {
        ...prevList,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(...list);
    if (editId) {
      const newList = list.map((item) =>
        item.id === editId ? { ...list, ...formData } : item
      );
      setList(newList);
      setFormData({
        name: "",
        price: "",
        year: "",
      });
      setEditId(0);
      return;
    }
    const id = list.length ? list[list.length - 1].id + 1 : 1;
    const newData = { ...formData, id: id };
    setList([...list, newData]);
    setFormData({
      name: "",
      price: "",
      year: "",
    });
  }
  function handleEditSubmit(id) {
    // const currentItem = list.find((item) => item.id == id);
    console.log(id);
  }
  useEffect(() => {
    try {
      localStorage.setItem("list", JSON.stringify(list));
    } catch (err) {
      console.log(err);
    }
  }, [list]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={() => handleEditSubmit(formData.id)}>
        {editId ? "Update" : "Submit"}
      </button>
    </form>
  );
}

export default Create;
