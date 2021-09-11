import React from "react";

// Styles
import "../styles/EraserCursor.css";

function EraserCursor(props) {
    return <div 
        className="eraser_cursor"
        style={{
            top: `${props.y - 8}px`,
            left: `${props.x - 8}px`
        }}
    ></div>
}

export default EraserCursor;
