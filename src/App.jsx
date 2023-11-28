import React, { useRef } from "react";
import { ColorPicker } from "./component/colorpicker";

import "./App.css";

export const App = () => {
    const colorPickerRef = useRef(null);

    const handleButtonClick = () => {
        alert(`Selected color: ${colorPickerRef.current.value}`);
    };

    return (
        <div className="center">
            <ColorPicker ref={colorPickerRef} />
            <button onClick={handleButtonClick}>Show Color</button>
        </div>
    );
};