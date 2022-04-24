var d1 = Math.floor(Math.random()*6)+1;
// alert(d1);

var d2 = Math.floor(Math.random()*6)+1;
// alert(d1);
var s1 = "images/dice"+d1+".png";
// alert(s1);
var s2 = "images/dice"+d2+".png";

document.querySelector(".img1").setAttribute("src",s1);

document.querySelector(".img2").setAttribute("src",s2);

if(d1>d2)
{
    
document.querySelector("h2").innerText = "P1 wins";
}
else if(d2>d1)
{
    
document.querySelector("h2").innerText = "P2 wins";
}
else
{
    
document.querySelector("h2").innerText = "DRAW";
}