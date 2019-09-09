var cl1 =document.querySelector(".color1");
var cl2 =document.querySelector(".color2");
var body = document.getElementById("bg");
var css = document.querySelector("h3");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready!");
    changeColor();
    css.textContent=body.style.background + ";";
  });

function changeColor()
{
    body.style.background='linear-gradient(to right,'+ cl1.value+' , '+cl2.value+')';
    css.textContent=body.style.background + ";";
}

cl1.addEventListener("input", changeColor);


cl2.addEventListener("input",changeColor);