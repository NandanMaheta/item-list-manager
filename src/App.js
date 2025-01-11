import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  const [items, setItems] = useState([]); // State to manage the list of items
  const [inputValue, setInputValue] = useState(""); // State to manage the input field value

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add the new item to the list
      setInputValue(""); // Clear the input field
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = (e) => {
    if (e.code.toLowerCase() === "enter"){
      handleAddItem()
    }
  };

  return (
    <div className="app">
      <h1>Item List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item..."
          className="input-field"
          onKeyDown={(e) => addItem(e)}
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;