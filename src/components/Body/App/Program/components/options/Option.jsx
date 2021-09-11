import React from "react";

//Styles
import "../styles/Option.css";

function Option(props) {
    return <>
        <img className={`option ${props.bg && "bg"}`} src={props.img} title={props.title} alt={props.alt} onClick={props.logic}/>
        {props.children}
    </>
}

export default Option;
