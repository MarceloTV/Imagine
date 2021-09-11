import React from "react";

import "../styles/InputText.css";

function  InputText(props) {
    return <input type="text" id="inputText" className="InputText" style={{
        top: `${props.y}px`,
        left: `${props.x}px`
    }}/>
}

export default InputText;
