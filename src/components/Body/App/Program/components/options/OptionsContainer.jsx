import React, { useContext } from "react";

// styles
import "../styles/OptionsContainer.css";

// Option
import Option from "./Option";
import ColorOption from "./ColorOption";

// Images
import pencil from "../../../../../../assets/pencil.png";
import eraser from "../../../../../../assets/eraser.png";
import text from "../../../../../../assets/T.png";
import image from "../../../../../../assets/image.png";

//Context
import Context from "../../context/Context";

function OptionsContainer(props){

    const { dispatch, option } = useContext(Context)

    return <div className="options_container">
        <Option
            img={pencil}
            alt="draw"
            title="draw"
            bg={option === "draw"}
            logic={() => dispatch({type: "CHANGEOPTION", payload: "draw"})}
        />

        <Option
            img={eraser}
            alt="eraser"
            title="eraser"
            bg={option === "eraser"}
            logic={() => dispatch({type: "CHANGEOPTION", payload: "eraser"})}
        />

        <Option 
            img={text}
            alt="text"
            title="text"
            bg={option === "text"}
            logic={() => dispatch({type: "CHANGEOPTION", payload: "text"})}
        />

        <Option
            img={image}
            alt="image"
            title="image"
            bg={option === "image"}
            logic={() => dispatch({type: "CHANGEOPTION", payload: "image"})}
        />

        <ColorOption
            onChange={(color) => dispatch({type: "CHANGECOLOR", payload: color})}
        />
    </div>
}

export default OptionsContainer;
