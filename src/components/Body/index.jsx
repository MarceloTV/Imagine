import React, { useState } from "react";

// App sections
import Home from "./App/Home";
import Program from "./App/Program";

function Body(props){
    const [path,setPath] = useState("Home")

    return <main>
        {path === "Home" && <Home changuePath={() => setPath("Program")} />}
        {path === "Program" && <Program />}
    </main>
}

export default Body;
