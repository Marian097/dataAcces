let cerc = document.getElementById("cerc");
let position = 0; 

const id = setInterval(move, 20, cerc)


function move(element){
    position += 5
    element.style.left = position + "px"
    if (position > window.innerWidth - 50)
    {
        clearInterval(id)
    }
}





