import "./ColorPicker.css";
import { useState } from "react";

function ColorPicker({doColorSelect}){

  const colorOptions = ["#1c4fbe", "#f94003", "#2ab06a", "#1f1f20", "#771c39"];

  const [selectedColor, setSelectedColor] = useState("");

  function handleColorSelect(color){
    doColorSelect(color);
    setSelectedColor(color);
  }

  return(
    <div className="ColorPicker">
      <label htmlFor="color" className="form-label">Choose a Background Color</label>
      <div className="ColorPicker-container">
        {colorOptions.map(color =>
          <button
          key={color}
          className={selectedColor === color? 'ColorPicker-selected': 'ColorPicker-button'}
          style={{
            backgroundColor: color,
            width: '50px',
            height: '50px',
            margin: '8px',
          }}
          onClick={() => handleColorSelect(color)}
          />
          )}
      </div>
    </div>


  )
}

export default ColorPicker;