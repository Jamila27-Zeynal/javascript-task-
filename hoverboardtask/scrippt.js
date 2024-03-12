const container=document.getElementById("container");
const colors=[`#e74c3c`,`#8e44ad`,`#3498db`,`#e67e22`,`#2ecc71`]

const Shape=600;

for (let i=0;i<Shape;i++){

    const shape=document.createElement("div");
    shape.classList.add("Shape");


shape.addEventListener("mouseover" , () => setColor(Shape));
shape.addEventListener("mouseout" , () => removeColor(Shape));

    container.appendChild(shape);
}

function setColor(element){
    const color =getRandomColor();
    element.style.background=color;
    element.style.boxShadow="0 0 2px ${color},0 0 10px ${color}";
}


function removeColor(element){
    element.style.background=`#1d1d1d`;
    element.style.background=`0 0 2px #000`;
}

function getRandomColor(){
    return colors(Math.floor(Math.random() *colors.length))
}