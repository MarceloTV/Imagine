import React, { useState } from "react";

//Styles
import "../styles/ImageOption.css";

function ImageOption(props) {

    const [bg,setBg] = useState("");
    const [image,setImage] = useState("");

    function imageChange(e){
        setBg(`url(${URL.createObjectURL(e.currentTarget.files[0])})`);
        setImage(URL.createObjectURL(e.currentTarget.files[0]));
    }

    return <div className="img_opt_container" style={{
        top: `${props.top}`,
        left: `${props.left}`
    }}>
        <label htmlFor="id_image" className="my_label" style={{
            background: bg,
        }}></label>
        <input type="file" id="id_image" onChange={imageChange} />
        <input type="number" placeholder="width" id="img_width" />
        <input type="number" placeholder="height" id="img_height" />
        <button type="button" id="the_button" className="the_button">Ok</button>
        <img src={image} id="the_image" className="the_image" alt="img"/>
    </div>
}

export default ImageOption;
