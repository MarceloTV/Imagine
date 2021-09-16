import React,{ useRef } from "react";

import "./styles/Download.css";

function Download(props){
    const download = useRef();

    function onClick(e){
        const canvas = document.getElementById("canvas");
        const canvas_url = canvas.toDataURL();

        download.current.href = canvas_url;
        download.current.click();

    }

    return <div className="download_container">
        <button type="button" onClick={onClick} className="download">Download !</button>
        <a download="output.png" ref={download} href="./">#</a>
    </div>
}

export default Download;
