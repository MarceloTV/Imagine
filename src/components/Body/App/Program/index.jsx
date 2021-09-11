import React from "react";

//Styles
import "./styles/ProgramContainer.css";

//Components
import OptionsContainer from "./components/options/OptionsContainer";
import Canvas from "./components/Canvas";

//Context
import ProgramContext from "./context";

function Program(props){
    
    return <div className="program_container">
        <ProgramContext>
            <OptionsContainer />
            <Canvas />
        </ProgramContext>
    </div>

}

export default Program
