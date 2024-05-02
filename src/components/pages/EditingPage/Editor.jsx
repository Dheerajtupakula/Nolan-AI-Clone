// Editor.jsx

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Editor() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scriptDataString = queryParams.get("data");
  const initialScriptData = JSON.parse(decodeURIComponent(scriptDataString));

  const [scriptData, setScriptData] = useState(initialScriptData || []);
  const [newItem, setNewItem] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (newItem.trim() !== "") {
        setScriptData((prevData) => [...prevData, newItem.trim()]);
        setNewItem(""); // Clear input field
      }
    }
  };

  return (
    <div className="editor">
      <h2>Editor</h2>
      <div className="editor-input-content">
        {scriptData.map((item, index) => (
          <span className="input-text" contentEditable key={index}>
            {item}
          </span>
        ))}
      </div>
      <textarea
        className="input-text text-area"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default Editor;
