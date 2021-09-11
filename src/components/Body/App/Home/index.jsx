import React,{useRef, useEffect} from "react";

//Styles
import "./styles/Home.css"

function Home(props){
    const ref = useRef();

    useEffect(() => {
        let count = ref.current.children.length;
        let references = [...ref.current.children].reverse();

        //Home fade effect animation :D 
        function fade(_references){
            _references[count - 1].classList.add("fadeOpen");
            count -= 1;
            if (count === 0) {
                setTimeout(() => {
                    _references[count].style.transition = "all ease .3s";
                    console.log(_references[count].style)
                },1500)
                return false;
            };
            setTimeout(fade.bind({},_references),300)
        }

        fade(references);
    },[])

    return <div className="home" ref={ref}>
        <h2 className="h1">Welcome To Imagine!</h2>
        <p>A great tool to improve your imagination</p>
        <button type="button" onClick={props.changuePath}>Start</button>
    </div>
}

export default Home;
