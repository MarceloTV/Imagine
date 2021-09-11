import React, { useReducer } from "react";

//context
import Context from "./Context";

//Reducer
import Reducer from "./Reducer";

function ProgramContext(props){

    const initialState = {
        option: null,
        color: "#000"
    }

    const [state, dispatch] = useReducer(Reducer,initialState)

    return <Context.Provider value={{
        option: state.option,
        color: state.color,
        dispatch
    }}>
        {props.children}
    </Context.Provider>
}

export default ProgramContext;
