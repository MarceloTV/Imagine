import React,{useRef} from "react";

// styles
import "../styles/ColorOption.css";

function ColorOption(props) {
    const ref = useRef();

    return <label className="color_option" htmlFor="my_color">
        <div ref={ref}></div>
        <input 
            type="color" 
            name="color" 
            id="my_color" 
            style={{display: "none"}}
            onChange={(e) => {
                ref.current.style.background = e.currentTarget.value;
                props.onChange(e.currentTarget.value);
            }}
        />
    </label>
}

export default ColorOption;
