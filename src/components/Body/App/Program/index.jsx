import React from "react";

//Styles
import "./styles/ProgramContainer.css";

//Components
import OptionsContainer from "./components/options/OptionsContainer";
import Canvas from "./components/Canvas";
import Download from "./components/Download";

//Context
import ProgramContext from "./context";

function Program(props){
    
    return <div className="program_container">
        <div className="alert_pc">
            <div className="content">
                <h2>Alert</h2>
                <p>This app is only in pc</p>
            </div>
        </div>
        <ProgramContext>
            <OptionsContainer />
            <Canvas />
            <Download />
        </ProgramContext>
    </div>

}

export default Program
