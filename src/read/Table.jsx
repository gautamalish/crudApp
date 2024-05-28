import React from "react";
import "./table.css";
import { useAuth } from "../context";
function Table() {
  const { list, setList, formData, setFormData, setEditId } = useAuth();

  function handleDelete(id) {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  }
  function handleEdit(id) {
    const tempData = list.find((item) => item.id == id);
    setFormData(tempData);
    setEditId(id);
  }
  return (
    <div className="tableDiv">
      <table>
        <thead>
          <tr className="headingRow">
            <th>Name</th>
            <th>Price</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.year}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
