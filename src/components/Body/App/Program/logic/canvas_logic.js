function getExactlyCoordinates(canvas,event){
    var rect = canvas.getBoundingClientRect(), // abs. size of element
            scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
            scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

    return {
        x: (event.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
        y: (event.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
}

function canvas_logic(reference,{option,color}, {setShowInput, setShowInputImage}) {
    const ctx = reference.getContext("2d");

    let pos = {
        x: null,
        y: null
    }

    switch(option){
        case "draw":
            reference.onclick = null;

            reference.onmousemove = (e) => {
                const { x, y } = getExactlyCoordinates(reference,e);
        
                if (e.buttons !== 1) return;
        
                ctx.beginPath();
        
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
                ctx.strokeStyle = color;
        
                ctx.moveTo(pos.x,pos.y);
                pos = {
                    x,
                    y
                }
                ctx.lineTo(pos.x,pos.y);
                ctx.stroke();
            }
        
            reference.onmousedown = (e) => {
                const { x, y } = getExactlyCoordinates(reference,e);
                pos = {
                    x,
                    y
                }
            }
        break;

        case "eraser":
            reference.onclick = null;

            reference.onmousemove = (e) => {
                const { x, y } = getExactlyCoordinates(reference,e);

                pos = {
                    x,
                    y
                }

                if(e.buttons !== 1) return;

                ctx.clearRect(x - 8,y - 8,16,16);
            }
            
        break;

        case "text":
            reference.onmousemove = (e) => {
                const { x, y } = getExactlyCoordinates(reference,e);
                pos = {
                    x,
                    y
                }
            }

            
            reference.onclick = (e) => {
                let x = pos.x;
                let y = pos.y;

                setShowInput({
                    show: true,
                    x,
                    y
                });

                const input = e.currentTarget.parentNode.getElementsByClassName("InputText")[0];
                input.focus();

                input.onchange = (e) => {
                    const {value} = e.currentTarget;
                    console.log(value)
                    ctx.font = "18px Arial";
                    ctx.fillStyle = color;
                    ctx.fillText(value ,x ,y + 11);
                    setShowInput({
                        show: false,
                        x,
                        y
                    });
                }
            }
        break;

        case "image":
            const the_image = document.getElementById("the_image"),
                  the_button = document.getElementById("the_button"),
                  img_width = document.getElementById("img_width"),
                  img_height = document.getElementById("img_height"),
                  id_image = document.getElementById("id_image");

            reference.onmousemove = (e) => {
                const { x, y } = getExactlyCoordinates(reference,e);
                pos = {
                    x,
                    y
                }
            }

            reference.onclick = (e) => {
                console.log(pos.x,pos.y)
                setShowInputImage({x:"10px",y:"10px"});
                let position = {
                    x: pos.x,
                    y: pos.y
                }
                the_button.onclick = (e) => {
                    console.log(position)

                    if(
                        img_width.value === "" ||
                        img_height.value === "" ||
                        Number(img_width.value) <= 5 ||
                        Number(img_height.value) <= 5 ||
                        id_image.value === ""
                    ) return;

                    //console.log(the_image,position.x,position.y,Number(img_width.value),Number(img_height.value))

                    ctx.drawImage(the_image,position.x,position.y,Number(img_width.value),Number(img_height.value));
                }
            };

            reference.onmousedown = null;
            
        break;

        default:
            return;
    }

    return {
        close: () => {
            reference.onmousedown = null;
            reference.onmousemove = null;
        }
    }
}

export default canvas_logic;
