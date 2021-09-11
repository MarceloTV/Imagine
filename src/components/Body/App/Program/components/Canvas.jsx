import React,{ useRef, useEffect, useContext, useState } from "react";

//Styles
import "./styles/Canvas.css";

//Canvas Functions
import canvas_logic from "../logic/canvas_logic";

//context
import Context from "../context/Context";

//Components
import EraserCursor from "./cursors/EraserCursor";
import InputText from "./other/InputText";
import ImageOption from "./options/ImageOption";

function Canvas(props){
    const my_canvas = useRef();
    const { option, color } = useContext(Context);
    const [pos,setPos] = useState({x: null, y: null});
    const [showCursor, setShowCursor] = useState(false);
    const [showInput, setShowInput] = useState({show: false, x: null, y: null});
    const [showInputImage,setShowInputImage] = useState({x: "-50%", y: "-50%"});

    useEffect(() => {
        if(option !== "text"){
            setShowInput({x:null, y:null, show: false});
        }

        if(option !== "image"){
            setShowInputImage({x: "-50%", y: "-50%"});
        }

        canvas_logic(my_canvas.current,{option, color},{setShowInput,setShowInputImage});
    },[option,color])

    function getCoordinates(e){
        var rect = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        setPos({x, y})
    }

    return <div 
            className="canvas_container" 
            onMouseMove={getCoordinates}
            onMouseOver={() => setShowCursor(true)}
            onMouseOut={() => setShowCursor(false)}
        >
        <canvas 
        ref={my_canvas} className="canvas" width="600" height="400" /* style={{
        width: "600px",
        height: "400px"
        }} */></canvas>
        {showCursor && (
            <EraserCursor
                x={pos.x}
                y={pos.y}
            />
        )}
        {showInput.show && (
            <InputText 
                x={showInput.x}
                y={showInput.y}
            />
        )}

        <ImageOption
            left={showInputImage.x}
            top={showInputImage.y}
        />
    </div>
}

export default Canvas;
