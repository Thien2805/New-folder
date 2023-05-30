let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");

dot1.onclick= image1;
function image1(){
    img1.style = "display = block"
    img2.style = "display = none"
    img3.style = "display = none"
}
dot2.onclick= image2;
function image2(){
    img1.style = "display = none"
    img2.style = "display = block"
    img3.style = "display = none"
}
dot3.onclick= image3;
function image3(){
    img1.style = "display = none"
    img2.style = "display = none"
    img3.style = "display = block"
}

