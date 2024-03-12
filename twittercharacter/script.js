
const textArea = document.getElementById("text");
const count=document.querySelector(".count");


textArea.addEventListener("input",(e) => {
 
    const textLength=e.target.value.length;
  count.textContent=textLength;

  if(textLength >= 5)  {
    document.body.style.background="rgb(200, 35,35,35)";
  }else{
    document.body.style.background="yellow"
  }
});
